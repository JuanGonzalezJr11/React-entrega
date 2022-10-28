import React from 'react'
import './Home.css'
import logo from './assets/homeimage.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='div-Home'>
        <h1 className='title-Home'>
            💥 New arrivals 💥
        </h1>
        <Link to='/products'>
            <img src={logo} alt='new arrivals' className='img-Home'/>
        </Link>
    </div>
  )
}

export default Home