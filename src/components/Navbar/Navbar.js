import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/Logo-VANS.png.png'

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
            <div className='cart'>
                <CartWidget />
            </div>
            <div className='div-login'>
                <p>
                    Are you member?
                </p>
                <button>
                    Login
                </button>
                <button>
                    Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar