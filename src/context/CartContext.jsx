import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const onAddProduct = (product) => {
        setCart([...cart, product])
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

    return (
        <CartContext.Provider value={{onAddProduct, quantityAdd, cart, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider