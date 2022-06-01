import React from 'react'
import { Link } from 'react-router-dom'
import './Discussion.css'

const DiscussionBookSummary = ({ discussionData }) => {
    console.log(discussionData)
    if (discussionData.bookAuthor && discussionData.bookTitle && discussionData.bookShort){
    return (
            <Link to={`/books/${discussionData.bookShort}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div className='Discussion-book-summary'>
                    <h4>{discussionData.bookTitle}</h4>
                    <h6>{discussionData.bookAuthor}</h6>
                </div>
            </Link>
    )
    }
    return (
        <div className='Discussion-book-summary'> <h4>Sem informações desse livro :/</h4> </div>
    )
}

export default DiscussionBookSummary