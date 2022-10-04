import './FilterProduct.css'
import { Link } from 'react-router-dom'

const FilterProduct = () => {
    return (
        <div className="div-FilterProduct">
            <label>Search:</label>
            <Link to='/products'><button>All</button></Link>
            <Link to='/products/shoes'><button>Shoes</button></Link>
            <Link to='/products/shirts'><button>Shirts</button></Link>
            <button>Hoodies</button>
            <button>Jackets</button>
            <Link to='/products/hats'><button>Hats</button></Link>
            <button>Shorts</button>
            <button>Boardshorts</button>
            <Link to='/products/pants'><button>Pants</button></Link>
            <button>Bags</button>
            <button>Socks</button>
            <button>Wallets</button>
            <button>Sunglasses</button>
        </div>
    )
}

export default FilterProduct