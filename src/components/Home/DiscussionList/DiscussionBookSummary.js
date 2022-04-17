import React from 'react'
import { Rating } from '@mui/material'
import './Discussion.css'

const DiscussionBookSummary = ({bookSummary}) => {
    return (
        <div className='Discussion-book-summary'>
            <h4>{bookSummary.title}</h4>
            <div>
                <h6>{bookSummary.author}</h6>
                <Rating name="read-only" value={bookSummary?.avaregeRating} readOnly/>
            </div>
        </div>
    )
}

export default DiscussionBookSummary