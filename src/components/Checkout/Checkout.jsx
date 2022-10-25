import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const objOrder = {
        buyer: {
            name: 'Juan Gonzalez',
            phone: '3512222222',
            email: 'juang@gmail.com'
        },
        items: CartContext,
    }

    return (
        <h1>CHECKOUT</h1>
    )
}

export default Checkout