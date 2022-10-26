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
        
        cart.forEach(c => {
            if(c.id === product.id){
                let oldQuantity = c.quantity;
                const cartList = cart.filter(c => c.id !== product.id);
                product.quantity += oldQuantity;
                setCart([...cartList, product]);
            }
        })
        
        let message = '';
        if(product.quantity > 1)
            message = 'Se añadieron los productos al carrito.';
        else
            message = 'Se añadió el producto al carrito.';

        setNotification('success', message);
    }

    const quantityAdd = () =>{
        let quantity = 0;
        cart.forEach(c => {
            quantity += c.quantity;
        })
        return quantity;
    }

    const deleteProduct = (id) => {
        const cartList = cart.filter(c => c.id !== id);
            setCart(cartList);
    }
    
    const deleteAllProducts = () => {
        setCart([]);
    }

    const totalPriceCart = () => {
        let total = 0;
        cart.forEach(c => {
            total += c.price * c.quantity;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{onAddProduct, quantityAdd, cart, deleteProduct, deleteAllProducts, totalPriceCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider