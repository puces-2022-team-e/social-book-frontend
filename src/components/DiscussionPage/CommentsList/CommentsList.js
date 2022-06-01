import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import cookie from 'react-cookies';
import { url_base } from '../../../constans';
import DiscussionComment from './DiscussionComment';
import './CommentsList.css'

function CommentsList({ discussionId }) {
    const [state, setState] = useState({ loading: false, commentaries: null });

    console.log(state)
    async function fetchComments() {
        console.log('fetching comments');
        setState({loading: true, commentaries: null})
        const url = `${url_base}d/${discussionId}/c`;
        await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': cookie.load('loginToken'),
            }
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })
            ).then(res => {
                setState({ loading: false, commentaries: res.data })
            }));
    }

    if (state.loading) {
        return (
            <div className='comments-list'>
                <CircularProgress />
            </div>
        )
    }

    if (!state.loading && !state.commentaries) {
        return (
            <div className='comments-list'>
                <Button onClick={fetchComments}>Carregar comentários</Button>
            </div>
        )
    }

    if (state.commentaries.length === 0){
        return(
            <div className='comments-list'>
                Ainda não há comentários
                <Button onClick={fetchComments}>Recarregar</Button>
            </div>
        )
    }

    const commentariesItens = state.commentaries.map(item => <DiscussionComment key={item._id} commentData={item}/>)

    return (
        <div className='comments-list'>
            {commentariesItens}
            <Button onClick={fetchComments}>Recarregar</Button>
        </div>
    )
}

export default CommentsList