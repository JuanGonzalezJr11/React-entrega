import React from 'react'
import './NotFound.css'
import logo from './assets/breakskate3.png'

const NotFound = () => {
  return (
    <div className='div-NotFound'>
        <h1 className='title-NotFound'>404 NOT FOUND</h1>
        <img src={logo} alt='Not found page' className='img-NotFound'/>
    </div>
  )
}

export default NotFound