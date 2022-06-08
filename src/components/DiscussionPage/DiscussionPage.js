import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import cookie from 'react-cookies';
import { useParams } from 'react-router-dom';
import { url_base } from '../../constans';
import DiscussionSummary from '../DiscussionComponents/DiscussionSummary';
import Error from '../Error/Error';
import '../../App.css'
import CommentsList from './CommentsList/CommentsList';
import NewComment from './NewComment';

const initialState = {
  loading: true,
  discussionResponse: null
};

function DiscussionPage() {
  const [{ discussionResponse, loading }, setState] = useState(initialState)

  let { id } = useParams();

  useEffect(() => {
    console.log('fetching discussion');
    const url = `${url_base}d/${id}`;
    fetch(url, {
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
        setState({ loading: false, discussionResponse: res.data })
    }));

  }, [id])

  if (loading) {
    return <CircularProgress />
  }

  if (!discussionResponse) {
    return <div>Unable to find book</div>;
  }

  if (discussionResponse.error) {
    return <Error error={discussionResponse.error}/>
  }

  return (
    <div className='container'>
      <DiscussionSummary discussionData={ discussionResponse }/>
      <CommentsList discussionId={id}/>
      <NewComment discussionId={id} />
    </div>
  )
}

export default DiscussionPage