import React from 'react'

const DiscussionComment = ({ commentData }) => {
  console.log(commentData)
  return (
    <div className='Discussion-comment'>
        <p className='Discussion-texts'>@ainda nao tem usuario</p>
        <p className='Discussion-texts'>{commentData.commentary}</p>
    </div>
  )
}

export default DiscussionComment