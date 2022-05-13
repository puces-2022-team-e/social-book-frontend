import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import './BookRegister.css'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

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
    const [enableButton, setEnableButton] = useState(false)
    const [bookInfo, setBookInfo] = useState({
        short: undefined,
        title: undefined,
        authors: undefined,
        coverURL: undefined,
    });


    async function addBook() {
        bookInfo.authors = [bookInfo.authors]
        bookInfo.imageLinks = {
            thumbnail: bookInfo.coverURL,
            mainImage: bookInfo.coverURL
        }
        console.log('add book');
        const url = `https://cherry-tart-55973.herokuapp.com/api/v1/b/new/`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie.load('loginToken'),
            },
            body: JSON.stringify(bookInfo)
        });

        console.log(response)
        if (response.status === 201) {
            setBookWasAdded(true)
        }
    }

    function handleChange(event) {
        setBookInfo({ ...bookInfo, [event.target.id]: event.target.value === '' ? undefined : event.target.value})
        setEnableButton(
            bookInfo.title !== undefined && 
            bookInfo.short !== undefined && 
            bookInfo.authors !== undefined && 
            bookInfo.coverURL !== undefined
        )
    }

    function handleSubmitt() {
        addBook()
    }

    if(bookWasAdded){
        return (
            <div className='container'>
                <Typography>Livro adicionado com Sucesso</Typography>
                <br/>
                <Link to={`/books/${bookInfo.short}`}>Ir para página do livro</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <h3>Cadastrar um livro novo</h3>
            {Object.entries(fieldsLabels).map((entrie) => (
                <Field key={entrie[1]} id={entrie[0]} label={entrie[1]} handleChange={handleChange} />
            ))}
            <Button variant="contained" onClick={handleSubmitt} disabled={!enableButton}> Cadastrar </Button>
        </div>
    )
}

export default BookRegister

