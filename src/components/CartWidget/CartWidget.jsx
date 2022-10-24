import './CartWidget.css'
import cart from './assets/shopping-cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {quantityAdd} = useContext(CartContext)
    return(
        <div className='div-CartWidget'>
            <img src={cart} alt='cart' />
            <label>{quantityAdd()}</label>
        </div>
    )
}

export default CartWidget