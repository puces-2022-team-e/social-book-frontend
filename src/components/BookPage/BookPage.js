import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom";
import { Rating, CircularProgress } from '@mui/material'
import cookie from 'react-cookies';
import './BookPage.css'
import '../../App.css'

const initialState = {
    loading: true,
    data: null,
    error: false
};


function BookPage() {
    const [{ bookInfo, loading, error }, setState] = useState(initialState)


    let { short } = useParams();

    useEffect(() => {
        console.log('fetching books');
        const url = `https://cherry-tart-55973.herokuapp.com/api/v1/b/${short}`;
        // const url = `http://localhost:8077/api/v1/b/${id}`
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
            setState({ loading: false, bookInfo: res.data, error: false })
            // console.log(res.status, res.data)
        }));

    }, [short])

    if (loading) {
        return (
            <div className='progressbar'>
                <CircularProgress />
            </div>
        );
    }

    if (!bookInfo) {
        return <div>Unable to find book</div>;
    }

    if (error) {
        return <div>{bookInfo.error}</div>
    }

    return (
        <div className='bookpage'>
            <img src={bookInfo.imageLinks.mainImage} className='bookcover' />
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.authors[0]}</h2>
            <Rating name="no-value" value={null} />
        </div>
    );

}

export default BookPage;