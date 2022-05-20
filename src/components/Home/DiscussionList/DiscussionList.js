import React, { useEffect, useState } from 'react'
import DiscussionItem from './DiscussionItem'
import cookie from 'react-cookies';
import { CircularProgress } from '@mui/material';
import { url_base } from '../../../constans';

const initialState = {
  loading: true,
  discussions: null
};


const DiscussionList = () => {
  const [{ discussions, loading }, setState] = useState(initialState)

  useEffect(() => {
    console.log('fetching discussions');
    const url = `${url_base}d/`;
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
        setState({ loading: false, discussions: res.data })
    }));
  }, [])

  console.log(loading, discussions)
  if (loading) {
    return (
        <div className='progressbar'>
            <CircularProgress />
        </div>
    );
  }

  if (!loading && !discussions) {
      return <div>Unable to find any discussion</div>;
  }

  return (
    <div>
        {discussions.map((discussion) => (<DiscussionItem key={discussion._id} discussionData={ discussion }/>))}
    </div>
  )
}

export default DiscussionList