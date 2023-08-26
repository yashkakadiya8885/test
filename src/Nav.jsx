import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div id='nav'>
        <Link className='link' to='/'>
            <p>Home</p>
        </Link>
        <Link className='link' to='/About'>
            <p>About</p>
        </Link>
        <Link className='link' to='/Product'>
            <p>Product</p>
        </Link>
        <Link className='link' to='/Cart'>
            <p>Cart</p>
        </Link>
    </div>
  )
}

export default Nav