import './Cart.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <div className='div-Cart'>
            <h1>
                Cart 🛒
            </h1>
            {
                cart.length === 0 ? <p className='p-cartVacio'>No se han agregado productos al carrito aún. 😔</p> :
                <>
                    {
                        cart.map(c => (
                            <CartItem {...c} key={c.id}/>
                        ))
                    }
                    <p className='p-total'>Total: $10000</p>
                    <div className='div-Buttons'>
                        <button className='button-default'>CLEAN</button>
                        <button>NEXT</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart