import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import cookie from 'react-cookies';
import { url_base } from '../../../constans';
import DiscussionComment from './DiscussionComment';

function CommentsList({ discussionId }) {
    const [state, setState] = useState({ loading: false, commentaries: null });

    console.log(state)
    async function fetchComments() {
        console.log('fetching comments');
        setState({loading: true, commentaries: null})
        const url = `${url_base}c/${discussionId}`;
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
            <CircularProgress />
        )
    }

    if (!state.loading && !state.commentaries) {
        return (
            <Button onClick={fetchComments}>Carregar comentários</Button>
        )
    }

    if (state.commentaries.length === 0){
        return(
            <div>Ainda não há comentários</div>
        )
    }

    const commentariesItens = state.commentaries.map(item => <DiscussionComment key={item._id} commentData={item}/>)

    return (
        <div>{commentariesItens}</div>
    )
}

export default CommentsList