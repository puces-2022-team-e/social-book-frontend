import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container'>
        <h3>Projeto integrado time E</h3>
        <p>
          Não encontrou o livro que procurava? 
          <br/> 
          <Link to="/bookregister">Adicione aqui</Link>
        </p>
    </div>
  )
}

export default About