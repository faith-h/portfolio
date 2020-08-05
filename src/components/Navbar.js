import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <>
    <nav>
      <NavLink class='nav-link' to='/'>
        <div class='logo'>
          <p class='logo-text'> Faith Hafen </p>
        </div>
      </NavLink>
      <ul class='nav-list'>
        <li>
          <NavLink activeStyle={{ textDecoration: 'line-through' }} className='nav-link' to='/about'> about </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ textDecoration: 'line-through' }} className='nav-link' to='/projects'> projects </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ textDecoration: 'line-through' }} className='nav-link' to='/contact'> contact </NavLink>
        </li>
      </ul>
    </nav>
  </>
)

export default Navbar