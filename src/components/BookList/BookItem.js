import React from 'react'
import { Rating } from '@mui/material'
import './BookList.css'
import { Link } from 'react-router-dom'

function BookItem({ data }) {
    return (
        <div className='bookitembox'>
            <Link to={`/books/${data.short}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='bookitem'>
                    <img src={data.imageLinks.mainImage} width="100" />
                    <div className='bookinfo'>
                        <h6>{data.authors[0]}</h6>
                        <p>{data.title}</p>
                        <div>
                            <Rating name="read-only" value={data.averageRating} readOnly />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BookItem