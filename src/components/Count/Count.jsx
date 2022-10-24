import React from 'react'
import { useState } from 'react'

const Count = ({addProduct}) => {
    const [counter, setCounter] = useState(1)

    const handleDecrement = () => {
        if(counter != 0)
            setCounter(counter - 1)
    }

    const handleAdd = () => {
        setCounter(counter + 1)
    }


    return (
        <div>
            <button onClick={() => addProduct(counter)}>ADD TO CART</button>
            <button onClick={handleDecrement}>-</button>
            <label>{counter}</label>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Count
