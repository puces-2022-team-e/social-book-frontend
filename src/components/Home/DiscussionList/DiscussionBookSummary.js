import React from 'react'
import { Link } from 'react-router-dom'
import './Discussion.css'

const DiscussionBookSummary = ({ bookSummary }) => {
    return (
            <Link to={`/books/${bookSummary.short}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div className='Discussion-book-summary'>
                    <h4>{bookSummary.title}</h4>
                    <h6>{bookSummary.author}</h6>
                </div>
            </Link>
    )
}

export default DiscussionBookSummary