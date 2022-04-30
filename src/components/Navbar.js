import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
    <input className='menu-btn' type='checkbox' id='meanu-btn'/>
    <label className='menu-icon' for='menu-btn'>
    </label>
    <ul className='menu'>
    <li><a href='#' className='active'>Product</a></li>
    <li><a href='#'>UpdateProduct</a></li>
    <li><a href='#'>Login</a></li>
    <li><a href='#'>Register</a></li>
    </ul>
    </nav>
  )
}

export default Navbar