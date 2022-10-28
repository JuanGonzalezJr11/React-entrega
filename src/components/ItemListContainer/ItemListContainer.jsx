import './ItemListContainer.css'
import { useState, useEffect, useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import FilterProduct from '../FilterProduct/FilterProduct'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from '../../notification/Notification'
import OutStock from '../OutStock/OutStock'


const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    const {setNotification} = useContext(NotificationContext);
    let flag;

    useEffect(() => {
        setLoading(true);
        const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products');
        getDocs(collectionRef).then(res => {
            const productsAdapted = res.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            })
            setProducts(productsAdapted)
        }).catch(() => {
            setError(true);
            setNotification('error', 'No se pudo obtener los productos.');
        }).finally(() => {
            setLoading(false);
        })
    }, [categoryId])

    if(loading){
        return <Loading />
    }

    if(error){
        return <h3>Se ha producido un error...</h3>
    }

    console.log(products)

    const stockByCategory = () => {
        for (let i = 0; i < products.length; i++) {
            const p = products[i];
            if(p.stock === 0){
                flag = true;
            }
            else{
                flag = false;
                break;
            }
        }
        return flag;
    }

    // if(stockByCategory() || products.length === 0){
    //     return <OutStock />
    // }

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
            {
                stockByCategory() || products.length === 0 ? 
                <OutStock /> :
                <div className='body'>
                    <ItemList products={products} />
                </div>    
            }
        </div>
    )
}

export default ItemListContainer;