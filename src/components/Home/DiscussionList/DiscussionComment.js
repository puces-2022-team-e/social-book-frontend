import React from 'react'

const DiscussionComment = ({ commentData }) => {
  return (
    <div className='Discussion-comment'>
        <p className='Discussion-texts'>@{commentData.userName}</p>
        <p className='Discussion-texts'>{commentData.text}</p>
    </div>
  )
}

export default DiscussionComment