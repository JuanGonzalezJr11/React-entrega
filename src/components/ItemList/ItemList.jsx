import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
    return (
        <div className='div-ItemList'>
            {products.map(product =>
                product.stock > 0 ? 
                <div className='card' key={product.id}>
                    <Link to={`/products/detail/${product.id}` }>
                        <h4>{product.name}</h4>
                    </Link>
                    <img src={product.img} alt='product' />
                    {/* <p>Color: {product.color}</p> */}
                    <p><b>${product.price}</b></p>
                </div> : ''
            )}
        </div>
    )
} 

export default ItemList