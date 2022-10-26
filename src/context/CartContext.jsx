import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { NotificationContext } from '../notification/Notification'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const {setNotification} = useContext(NotificationContext);

    const onAddProduct = (product) => {
        setCart([...cart, product])
        setNotification('success', 'Se añadieron los productos.');
    }
    console.log(cart)

    const quantityAdd = () =>{
        let quantity = 0
        cart.forEach(c => {
            quantity += c.quantity
        })

        return quantity
    }

    const deleteProduct = (id) => {
        const cartList = cart.filter(c => c.id !== id);
        setCart(cartList);
    }
    
    const deleteAllProducts = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{onAddProduct, quantityAdd, cart, deleteProduct, deleteAllProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider