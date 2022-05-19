import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom";
import { Rating, CircularProgress } from '@mui/material'
import cookie from 'react-cookies';
import { url_base } from '../../constans';
import './BookPage.css'
import '../../App.css'

const initialState = {
    loading: true,
    data: null,
    error: false
};


function BookPage() {
    const [{ bookResponse, loading, error }, setState] = useState(initialState)


    let { short } = useParams();

    useEffect(() => {
        console.log('fetching books');
        const url = `${url_base}b/${short}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': cookie.load('loginToken'),
            }
        }).then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            setState({ loading: false, bookResponse: res.data, error: false })
        }));

    }, [short])

    if (loading) {
        return (
            <div className='progressbar'>
                <CircularProgress />
            </div>
        );
    }

    if (!bookResponse) {
        return <div>Unable to find book</div>;
    }

    if (error) {
        return <div>{bookResponse.error}</div>
    }

    const bookInfo = bookResponse[0].bookInfo
    console.log(bookResponse)
    return (
        <div className='bookpage'>
            {bookInfo.imageLinks && <img src={bookInfo.imageLinks.mainImage} className='bookcover' />}
            {bookInfo.title && <h1>{bookInfo.title}</h1>}
            {bookInfo.authors && <h2>{bookInfo.authors[0]}</h2>}
            <Rating name="no-value" value={null} />
        </div>
    );

}

export default BookPage;