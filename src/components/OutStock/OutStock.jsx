import React from 'react'
import './OutStock.css'
import logo from './assets/outstock.png'

const OutStock = () => {
  return (
    <div className='div-OutStock'>
        <h1 className='title-OutStock'>
            Sorry! 😟
        </h1>
        <img src={logo} alt='out stock' className='img-OutStock' />
    </div>
  )
}

export default OutStock