import React from 'react'
import DiscussionBookSummary from './DiscussionBookSummary'
import DiscussionComment from './DiscussionComment'
import './Discussion.css'
import CommentsList from './CommentsList'


const DiscussionItem = ({ discussionData }) => {

  console.log(discussionData)
  let discussionComments
  if (discussionData.comments) {
    discussionComments = discussionData.comments.map((comment) => (<DiscussionComment key={comment.id} commentData={comment} />))
  }

  discussionData = { ...discussionData, bookSummary: {title: "mock", author: "mooock", short:'malcolmxfala'}, userName: "usuarioFicticio"}

  return (
    <div className='Discussion-item'>
      {discussionData.bookSummary && <DiscussionBookSummary
        bookSummary={discussionData.bookSummary}
      />}
      {discussionData.userName && <p className='Discussion-texts'>@{discussionData.userName}</p>}
      <p className='Discussion-texts'>{discussionData.title}</p>
      <CommentsList discussionId={discussionData._id}/>
    </div>
  )
}

export default DiscussionItem