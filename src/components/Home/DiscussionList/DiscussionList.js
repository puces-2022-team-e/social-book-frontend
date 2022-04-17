import React from 'react'
import DiscussionItem from './DiscussionItem'

const DiscussionList = ({ discussions }) => {
  return (
    <div>
        {discussions.map((discussion) => (<DiscussionItem key={discussion.id} discussionData={ discussion }/>))}
    </div>
  )
}

export default DiscussionList