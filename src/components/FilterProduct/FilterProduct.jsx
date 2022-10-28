import './FilterProduct.css'
import { Link } from 'react-router-dom'

const FilterProduct = () => {
    return (
        <div className="div-FilterProduct">
            <label>Search:</label>
            <Link to='/products'><button>All</button></Link>
            <Link to='/products/shoes'><button>Shoes</button></Link>
            <Link to='/products/shirts'><button>Shirts</button></Link>
            <Link to='/products/hoodies'><button>Hoodies</button></Link>
            <Link to='/products/jackets'><button>Jackets</button></Link>
            <Link to='/products/hats'><button>Hats</button></Link>
            <Link to='/products/shorts'><button>Shorts</button></Link>
            <Link to='/products/boardshorts'><button>Boardshorts</button></Link>
            <Link to='/products/pants'><button>Pants</button></Link>
            <Link to='/products/bags'><button>Bags</button></Link>
            <Link to='/products/socks'><button>Socks</button></Link>
            <Link to='/products/wallets'><button>Wallets</button></Link>
            <Link to='/products/sunglasses'><button>Sunglasses</button></Link>
        </div>
    )
}

export default FilterProduct