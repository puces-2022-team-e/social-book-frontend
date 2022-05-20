import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchBar from './SearchBar';


const Header = ({ userInfo }) => {

  const profile_info = (name, photo, buttonText) => {
    return (
      <div >
        <div className='header-profile-info'>
          <p>{name}</p>
          <img className='header-profile-photo' src={photo} />
        </div>
        <Link className='header-login-button' to='/login' style={{ color: 'inherit', textDecoration: 'inherit' }}>{buttonText}</Link>
      </div >
    )
  }

  return (
    <>
      <div className="header" id="header">
        <h1>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>Social Book</Link>
        </h1>
        <p>
          <Link to='/books' style={{ color: 'inherit', textDecoration: 'inherit' }}>Livros</Link>
        </p>
        <div >
          {userInfo.isLoggedIn ? (
            profile_info(`${userInfo.userGoogleData.name}`, userInfo.userGoogleData.photo, 'Sair')
          ) : (
            profile_info('Faça Login', 'https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true', 'Entrar')
          )}
        </div>
      </div>
      <SearchBar/>
    </>
  )
}

export default Header