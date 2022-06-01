import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import cookie from 'react-cookies';
import { url_base } from '../../constans';
import './DiscussionPage.css'

function NewComment({ discussionId }) {
    const [state, setState] = useState({commentText: '', validText: false});

    function handleChange(event) {
        const newText = event.target.value;
        setState({
            commentText: newText,
            validText: newText.length > 5 && newText.length <= 100
        })
    }

    async function handleSubmit() {
        console.log('post comment');
        const url = `${url_base}c/`;
        const payload = {
            commentary: state.commentText,
            discussionId: discussionId,
            userName: cookie.load('userName')
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
            alert("comentário criado com sucesso!")
        } else {
            alert("Algo deu errado")
        }
    }

    return (
        <div className='new-comment'>
            <h3>Novo comentário</h3>
            <TextField fullWidth onChange={handleChange} label={'Digite aqui seu comentário'} />
            <Button variante='filled' disabled={!state.validText} onClick={handleSubmit}>Criar</Button>
        </div>
    )
}

export default NewComment