import React from 'react'
import DiscussionComment from '../../DiscussionPage/CommentsList/DiscussionComment'
import './Discussion.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import DiscussionSummary from '../../DiscussionComponents/DiscussionSummary'


const DiscussionItem = ({ discussionData }) => {

  console.log(discussionData)
  let discussionComments
  if (discussionData.comments) {
    discussionComments = discussionData.comments.map((comment) => (<DiscussionComment key={comment.id} commentData={comment} />))
  }

  return (
    <div className='Discussion-item'>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`d/${discussionData._id}`}>
        <DiscussionSummary discussionData={discussionData} />
      </Link>
    </div>
  )
}

export default DiscussionItem