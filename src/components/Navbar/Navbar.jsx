import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo-VANS.png.png'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={logo} className='logo-img' alt='logo' />
            </div>
            <div className='div-buttons'>
                <Link to='/home'>
                    <button>
                        Home
                    </button>
                </Link>
                <Link to='/products'>
                    <button>
                        Products
                    </button>
                </Link>
                <button>
                    About Us
                </button>
                <button>
                    Contacts
                </button>
            </div>
            <div>
                <CartWidget />
            </div>
            <div>
                <Login />
            </div>
        </nav>
    )
}

export default Navbar