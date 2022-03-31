import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className="header" id="header">
      <h1>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Social Book</Link>
      </h1>
      <p>
        <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
      </p>
    </div>
  )
}

export default Header