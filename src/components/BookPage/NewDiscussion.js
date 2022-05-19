import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { url_base } from '../../constans';
import cookie from 'react-cookies';
import './BookPage.css'

function NewDiscussion({ bookId }) {
    const [state, setState] = useState({discussionText: '', validText: false});

    function handleChange(event) {
        const newText = event.target.value;
        setState({
            discussionText: newText,
            validText: newText.length > 0 && newText.length <= 280
        })
    }

    async function handleSubmit() {
        console.log('post discussion');
        const url = `${url_base}d/`;
        const payload = {
            title: state.discussionText,
            bookId: bookId
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie.load('loginToken'),
            },
            body: JSON.stringify(payload)
        });

        console.log(response)
        if (response.status === 201) {
            alert("discussão criada com sucesso!")
        } else {
            alert("Algo deu errado")
        }
    }

    return (
        <div className='newdiscussion'>
            <h3>Nova discussão</h3>
            <TextField fullWidth onChange={handleChange} label={'Digite aqui sua disucssão'} />
            <Button disabled={!state.validText} onClick={handleSubmit}>Criar</Button>
        </div>
    )
}

export default NewDiscussion