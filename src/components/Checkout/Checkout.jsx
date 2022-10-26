import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useState } from 'react'
import Loading from '../Loading/Loading'

const Checkout = () => {
    const {cart, totalPriceCart, deleteAllProducts} = useContext(CartContext);
    const total = totalPriceCart();
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const changeName = (event) => {
        let name = event.target.value;
        setName(name);
    }
    const changePhone = (event) => {
        let phone = event.target.value;
        setPhone(phone);
    }
    const changeEmail = (event) => {
        let email = event.target.value;
        setEmail(email);
    }

    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email
                },
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
            setName('');
            setPhone('');
            setEmail('');
        }
    }
    
    if(loading){
        return <Loading />;
    }

    return (
        <div className='div-Checkout'>
            <h1>Checkout ✔</h1>
            <div className='form'>
                <p>👤 Name:</p>
                <input id='txtName' type='text' value={name} onChange={changeName}></input>
                <p>☎ Phone:</p>
                <input id='txtPhone' type='text' value={phone} onChange={changePhone}></input>
                <p>✉ E-mail:</p>
                <input id='txtEmail' type='text' value={email} onChange={changeEmail}></input>
                <br />
                <button onClick={createOrder}>Submit and buy</button>
            </div>
        </div>
    )
}

export default Checkout