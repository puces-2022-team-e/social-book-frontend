import React from 'react'
import Error from '../Error/Error'
import DiscussionBookSummary from '../Home/DiscussionList/DiscussionBookSummary'
import './DiscussionComponents.css'

function DiscussionSummary({ discussionData }) {

  if (discussionData) {
    return (
      <div className='Discussion-item'>
      <DiscussionBookSummary
        discussionData={discussionData}
      />
      {discussionData.userName && <p className='Discussion-texts'>@{discussionData.userName}</p>}
      <p className='Discussion-texts'>{discussionData.title}</p>
      </div>
    )
  }
  
  return (
    <Error />
  )
}

export default DiscussionSummary