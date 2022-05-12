import React from 'react'
import { TextField } from '@mui/material'
import './BookRegister.css'

function Field({ name }) {
    return (
        <div className='book-register-field'>
            <TextField label={name} variant="outlined" />
        </div>
    )
}

function BookRegister() {
    const fieldsNames = ['Titulo', 'Subtitulo', 'Autor', 'Url da Capa', 'Categoria principal', 'Total de páginas', 'Editora', 'Data de publicação']
    return (
        <div>
            <h3>Cadastrar um livro novo</h3>
            {fieldsNames.map((name) => (
                <Field key={name} name={name} />
            ))}
        </div>
    )
}

export default BookRegister