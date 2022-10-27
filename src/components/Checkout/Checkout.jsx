import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useState } from 'react'
import Loading from '../Loading/Loading'
import FormCheckout from '../FormCheckout/FormCheckout'

const Checkout = () => {
    const {cart, totalPriceCart, deleteAllProducts} = useContext(CartContext);
    const total = totalPriceCart();
    const [loading, setLoading] = useState(false);

    const createOrder = async (buyer) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: buyer,
                items: cart,
                total
            };
    
            const ids = cart.map(p => p.id);
            const productsRef = collection(db, 'products');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const {docs} = productsAddedFromFirestore;

            const batch = writeBatch(db);
            const outOfStock = [];

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb >= prodQuantity)
                    batch.update(doc.ref, {stock: stockDb - prodQuantity});
                else
                    outOfStock.push({id: doc.id, ...dataDoc});
            })

            if(outOfStock.length === 0){
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                console.log(`El ID de su orden es: ${orderAdded.id}`);
                deleteAllProducts();
            }
            else{
                console.log('Hay productos fuera de stock.');
            }
        } 
        catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    
    if(loading){
        return <Loading />;
    }

    return (
        <FormCheckout createOrder={createOrder}/>
    )
}

export default Checkout