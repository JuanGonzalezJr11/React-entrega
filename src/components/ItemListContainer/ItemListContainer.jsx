import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'

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
        return <h2>Loading...</h2>
    }

    if(error){
        return <h3>Se ha producido un error...</h3>
    }

    return (
        <div className='div-ItemListContainer'>
            <h1>
                {mensaje}
            </h1>
            <p>
                Encontrá los productos que buscas acá. 🔥
            </p>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;