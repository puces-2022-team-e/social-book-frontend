import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'


export const BaseComponent = ({ children }) => {
  return (
    <div >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

BaseComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseComponent