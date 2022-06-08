import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function Error({ error }) {
  const isExpiredTokenError = (error && error.includes('Token used too late'))
  return (
    <div className='container'>
    <div>Algo deu errado</div>
    {isExpiredTokenError && <Link to='/login'> Faça login novamente</Link>}
    </div>
  )
}

export default Error