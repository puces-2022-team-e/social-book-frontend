import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <p>
            <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit'}}>Sobre nós</Link>
        </p>
    </div>
  )
}

export default Footer