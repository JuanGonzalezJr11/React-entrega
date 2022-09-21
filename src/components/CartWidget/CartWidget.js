import './CartWidget.css'
import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} className='cart-img' alt='cart' />
            0
        </div>
    )
}

export default CartWidget