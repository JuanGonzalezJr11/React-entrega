import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import Loading from '../Loading/Loading'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return <Loading />
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
                    <div className='row'>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer