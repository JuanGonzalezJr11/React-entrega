import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import Loading from '../Loading/Loading'
import { useParams } from "react-router-dom"
import Count from '../Count/Count'
import { useContext } from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'
import { getDoc, doc } from 'firebase/firestore'
import { NotificationContext } from '../../notification/Notification'
import { db } from '../../services/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    const {onAddProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const {setNotification} = useContext(NotificationContext);

    useEffect(() => {
        const docRef = doc(db, 'products', productId);
        getDoc(docRef).then(res => {
            const data = res.data();
            const productAdapted = {id: res.id, ...data}
            setProduct(productAdapted)
        }).catch(() => {
            setNotification('error', 'No se pudo obtener los productos.');
        }).finally(() => {
            setLoading(false)
        });
    }, [productId])

    if(loading){
        return <Loading />
    }

    const addProduct = (quantity) => {
        const productToAdd= {
            ...product,
            quantity
        }
        onAddProduct(productToAdd)
    }

    return (
        <div className='div-ItemDetailContainer'>
            <h1>Product details:</h1>
            <div className='content'>
                <div>
                    <img className='img-ItemDetailContainer' src={product.img} alt='product' />
                </div>
                <div>
                    <div className='row'>
                        {/* Lo que hace el "?" delante del objeto es preguntar si la variable es un objeto, de ser así muestra esa propiedad, si no, no lee la propiedad. */}
                        <p><b>Name:</b> {product.name}</p>
                        <p><b>Color:</b> {product.color}</p>
                        <p><b>Description:</b> Espacio para descripción personalizada referida a cada producto. Texto de relleno.</p>
                        <p><b>Price:</b> ${product.price}</p>
                    </div>
                </div>
            </div>
            <Count addProduct={addProduct}/>
        </div>
    )
}

export default ItemDetailContainer