import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import FilterProduct from '../FilterProduct/FilterProduct'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../asyncMock'

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId){
            setLoading(true)
            getProducts().then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getProductsByCategory(categoryId).then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])
    console.log(loading)
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
                    ¡Welcome to Vans Store! 🛹
                </h1>
                <p>
                    Encontrá los productos que buscas acá. 🔥
                </p>
            </div>
            <nav className='nav'>
                <FilterProduct />
            </nav>
            <div className='body'>
                <ItemList products={products} />
            </div>    
        </div>
        
    )
}

export default ItemListContainer;