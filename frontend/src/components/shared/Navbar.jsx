import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav>
          <Link to='/'>      
            <h1>TodoList</h1>
          </Link>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/lists'>
              <li>Lists</li>
            </Link>
          </ul>
        </nav>
    </>
  )
}

export default Navbar