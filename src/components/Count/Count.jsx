import './Count.css'
import React from 'react'
import { useState } from 'react'

const Count = ({addProduct, stock}) => {
    const [counter, setCounter] = useState(1)

    const handleDecrement = () => {
        if(counter !== 1)
            setCounter(counter - 1)
    }

    const handleAdd = () => {
        if(counter < stock)
            setCounter(counter + 1)
    }

    return (
        <div className='div-Count'>
            <button className={counter === 1 ? 'button-disabled' : 'button-primary button-dec-add'} onClick={handleDecrement}>-</button>
            <input type='text' disabled value={counter}></input>
            <button className={counter === stock ? 'button-disabled' : 'button-primary button-dec-add'} onClick={handleAdd}>+</button>
            <button className='button-primary' onClick={() => addProduct(counter)}>ADD TO CART</button>
        </div>
    )
}

export default Count
