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
    return (
        <CartContext.Provider value={{onAddProduct,quantityAdd}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider