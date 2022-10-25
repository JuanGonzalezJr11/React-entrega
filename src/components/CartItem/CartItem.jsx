import './CartItem.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({id, name, color, img, price, quantity}) => {
  const {deleteProduct} = useContext(CartContext);

  return (
    <div className='row'>
      <div className='div-CartItem'>
        <img className='img-CartItem' src={img} alt='product'  /> 
        <p>{name}</p>
        <p>{color}</p>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <Link onClick={() => deleteProduct(id)}>Delete</Link>
      </div>
    </div>
  )
}

export default CartItem