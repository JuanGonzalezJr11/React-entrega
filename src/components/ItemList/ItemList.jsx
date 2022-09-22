import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className='div-ItemList'>
            {products.map(product => 
                <div className='card' key={product.id}>
                    <h4>{product.name}</h4>
                    <img src={product.img} alt='product' />
                    <p>Color: {product.color}</p>
                    <p>${product.price}</p>
                </div>    
            )}
        </div>
    )
} 

export default ItemList