import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(res => {
            console.log(res)
            setProducts(res)
        }).catch(error => {
            console.log(error)
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    
    if(loading){
        return <Loading />
    }

    if(error){
        return <h3>Se ha producido un error...</h3>
    }

    return (
        <div className='div-ItemListContainer'>
            <div className='header'>
                <h1>
                    {mensaje}
                </h1>
                <p>
                    Encontrá los productos que buscas acá. 🔥
                </p>
            </div>
            <nav className='nav'>
                <label>Search:</label>
                <button>All</button>
                <button>Shoes</button>
                <button>Shirts</button>
                <button>Hoodies</button>
                <button>Jackets</button>
                <button>Hats</button>
                <button>Shorts</button>
                <button>Boardshorts</button>
                <button>Pants</button>
                <button>Bags</button>
                <button>Socks</button>
                <button>Wallets</button>
                <button>Sunglasses</button>
            </nav>
            <div className='body'>
                <ItemList products={products} />
            </div>    
        </div>
        
    )
}

export default ItemListContainer;