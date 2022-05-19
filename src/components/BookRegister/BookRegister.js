import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import './BookRegister.css'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import { url_base } from '../../constans';

const fieldsLabels = {
    short: "Apelido",
    title: "Título",
    subtitle: "Subtítulo",
    authors: "Autor",
    coverURL: "Url da capa",
    mainCategory: "Categoria principal",
    pageCount: "Total de páginas",
    publisher: "Editora",
}

function Field({ id, label, handleChange }) {
    return (
        <div className='book-register-field'>
            <TextField id={id} label={label} variant="outlined" onChange={handleChange} />
        </div>
    )
}

function BookRegister() {
    const [bookWasAdded, setBookWasAdded] = useState(false)
    const [state, setState] = useState(
        {
            enableButton: false,
            bookInfo: {
                short: undefined,
                title: undefined,
                authors: undefined,
                coverURL: undefined,
            }
        }
    );


    async function addBook() {

        console.log('add book');
        const url = `${url_base}b/`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie.load('loginToken'),
            },
            body: JSON.stringify(state.bookInfo)
        });

        console.log(response)
        if (response.status === 201) {
            setBookWasAdded(true)
        }
    }
    
    function validateBookPayload(newBook) {
        return newBook.title !== undefined && newBook.short !== undefined && newBook.authors !== undefined && newBook.coverURL !== undefined 
    }

    function handleChange(event) {

        const newPayload = { ...state.bookInfo, [event.target.id]: event.target.value === '' ? undefined : event.target.value }
        setState({
            bookInfo: newPayload,
            enableButton: validateBookPayload(newPayload)
        })
    }

    function handleSubmitt() {
        addBook()
    }

    if (bookWasAdded) {
        return (
            <div className='container'>
                <Typography>Livro adicionado com Sucesso</Typography>
                <br />
                <Link to={`/books/${state.bookInfo.short}`}>Ir para página do livro</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <h3>Cadastrar um livro novo</h3>
            {Object.entries(fieldsLabels).map((entrie) => (
                <Field key={entrie[1]} id={entrie[0]} label={entrie[1]} handleChange={handleChange} />
            ))}
            <Button variant="contained" onClick={handleSubmitt} disabled={!state.enableButton}> Cadastrar </Button>
        </div>
    )
}

export default BookRegister

