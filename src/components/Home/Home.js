import React from 'react'
import DiscussionList from './DiscussionList/DiscussionList';

const Home = () => {
  return (
    <div className='container'>
        <DiscussionList key={"list"} />
    </div>
  )
}

export default Home