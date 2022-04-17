import React from 'react'
import DiscussionBookSummary from './DiscussionBookSummary'
import DiscussionComment from './DiscussionComment'
import './Discussion.css'


const DiscussionItem = ({ discussionData }) => {

  let discussionComments
  if (discussionData.comments){
    discussionComments = discussionData.comments.map((comment) => (<DiscussionComment key={comment.id} commentData={ comment }/>))
  }
  
  return (
        <div className='Discussion-item'>
          <DiscussionBookSummary 
            bookSummary={discussionData.bookSummary} 
          />
          <p className='Discussion-texts'>@{discussionData.userName}</p>
          <p className='Discussion-texts'>{discussionData.discussion}</p>
          {discussionComments}
        </div>
    )
}

export default DiscussionItem