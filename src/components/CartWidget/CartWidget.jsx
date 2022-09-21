import './CartWidget.css'
import cart from './assets/shopping-cart.png'

const CartWidget = () => {
    return(
        <div className='div-CartWidget'>
            <img src={cart} alt='cart' />
            <label>0</label>
        </div>
    )
}

export default CartWidget