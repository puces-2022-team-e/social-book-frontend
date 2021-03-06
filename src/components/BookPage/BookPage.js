import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom";
import { Rating, CircularProgress } from '@mui/material'
import cookie from 'react-cookies';
import { url_base } from '../../constans';
import './BookPage.css'
import '../../App.css'
import NewDiscussion from './NewDiscussion';
import Error from '../Error/Error';

const initialState = {
    loading: true,
    data: null
};


function BookPage() {
    const [{ bookResponse, loading }, setState] = useState(initialState)

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

    if (bookResponse.error) {
        return <Error error={bookResponse.error}/>
    }


    const book = bookResponse[0]
    
    return (
        <div className='bookpage'>
            <img src={book.bookInfo.imageLinks.mainImage} className='bookcover' />
            <h1>{book.bookInfo.title}</h1>
            <h2>{book.bookInfo.authors[0]}</h2>
            <Rating name="no-value" value={null} />
            <h3>Discussões</h3>
            <p>Nenhuma discussão por enquanto</p>
            <NewDiscussion book={book}/>
        </div>
    );

}

export default BookPage;