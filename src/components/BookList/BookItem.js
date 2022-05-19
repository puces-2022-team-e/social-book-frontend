import React from 'react'
import { Rating } from '@mui/material'
import './BookList.css'
import { Link } from 'react-router-dom'

function BookItem({ data }) {
    console.log(data)
    const bookInfo = data.bookInfo
    return (
        <div className='bookitembox'>
            <Link to={`/books/${data.short}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='bookitem'>
                    {bookInfo.imageLinks && <img src={bookInfo.imageLinks.mainImage} width="100" />}
                    <div className='bookinfo'>
                        {bookInfo.authors && <h6>{bookInfo.authors[0]}</h6>}
                        <p>{bookInfo.title}</p>
                        <div>
                            <Rating name="read-only" value={bookInfo.averageRating} readOnly />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
    
}

export default BookItem