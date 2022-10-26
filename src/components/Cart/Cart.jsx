import './Cart.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {deleteAllProducts, cart, totalPriceCart} = useContext(CartContext);

    return (
        <div className='div-Cart'>
            <h1>Cart 🛒</h1>
            {
                cart.length === 0 ? <p className='p-cartVacio'>No se han agregado productos al carrito aún. 😔</p> :
                <>
                    {
                        cart.map(c => (
                            <CartItem {...c} key={c.id}/>
                        ))
                    }
                    <p className='p-total'>Total: ${totalPriceCart()}</p>
                    <div className='div-Buttons'>
                        <button className='button-default' onClick={() => deleteAllProducts()}>CLEAN</button>
                        <Link to='/checkout'><button>CHECKOUT</button></Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart