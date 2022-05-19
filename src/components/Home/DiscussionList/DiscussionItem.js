import React from 'react'
import DiscussionBookSummary from './DiscussionBookSummary'
import DiscussionComment from './DiscussionComment'
import './Discussion.css'


const DiscussionItem = ({ discussionData }) => {

  console.log(discussionData)
  let discussionComments
  if (discussionData.comments){
    discussionComments = discussionData.comments.map((comment) => (<DiscussionComment key={comment.id} commentData={ comment }/>))
  }
  
  return (
        <div className='Discussion-item'>
          {discussionData.bookSummary && <DiscussionBookSummary 
            bookSummary={discussionData.bookSummary} 
          />}
          {discussionData.userName && <p className='Discussion-texts'>@{discussionData.userName}</p>}
          <p className='Discussion-texts'>{discussionData.title}</p>
          {discussionComments}
        </div>
    )
}

export default DiscussionItem