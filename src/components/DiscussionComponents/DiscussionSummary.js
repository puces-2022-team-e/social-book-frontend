import React from 'react'
import DiscussionBookSummary from '../Home/DiscussionList/DiscussionBookSummary'
import './DiscussionComponents.css'

function DiscussionSummary({ discussionData }) {
    // discussionData = { ...discussionData, bookSummary: {title: "mock", author: "mooock", short:'malcolmxfala'}, userName: "usuarioFicticio"}

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

export default DiscussionSummary