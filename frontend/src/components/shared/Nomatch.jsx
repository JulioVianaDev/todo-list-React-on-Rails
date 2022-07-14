import React from 'react'
import {Link } from 'react-router-dom'
function Nomatch() {
  return (
    <>
      <h1>404 PAGE NOT FOUND</h1>
      <Link to='/'>Return Home</Link>
    </>
  )
}

export default Nomatch