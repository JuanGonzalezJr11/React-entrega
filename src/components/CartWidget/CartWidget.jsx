import './CartWidget.css'
import cart from './assets/shopping-cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {quantityAdd} = useContext(CartContext)
    return(
        <div className='div-CartWidget'>
            <Link to="/cart">
           
                <img src={cart} alt='cart' />
            </Link>
            <label>{quantityAdd()}</label>
        </div>
    )
}

export default CartWidget