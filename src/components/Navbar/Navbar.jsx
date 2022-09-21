import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo-VANS.png.png'
import Login from '../Login/Login'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={logo} className='logo-img' alt='logo' />
            </div>
            <div className='div-buttons'>
                <button>
                    Home
                </button>
                <button>
                    Products
                </button>
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