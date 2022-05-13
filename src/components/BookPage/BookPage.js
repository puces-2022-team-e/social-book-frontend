import React, { useState} from 'react'
import {
    useParams
  } from "react-router-dom";
import { Rating, CircularProgress } from '@mui/material'
import cookie from 'react-cookies';
import './BookPage.css'
import '../../App.css'


let bookInfo = undefined;

function BookPage() {
    const [loading, setLoading] = useState(true)

    let { short } = useParams();

    async function featchBookInfo () {
        console.log('fetching books');
        const url = `https://cherry-tart-55973.herokuapp.com/api/v1/b/${short}`;
        // const url = `http://localhost:8077/api/v1/b/${id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': cookie.load('loginToken'),
            }
        });

        const bookResponse = await response.json();
        bookInfo = bookResponse

        setLoading(false);
    }

	
    console.log('rendering');
    if (loading) {
        featchBookInfo()
        return (
            <div className='progressbar'>
				<CircularProgress />
			</div>
        );
    }

    if (!bookInfo) {
        return <div>Unable to find book</div>;
    }

    if(bookInfo.error) {
        return <div>{bookInfo.error}</div>
    }

    console.log('book page with info')
    return (
        <div className='bookpage'>
            <img src={bookInfo.imageLinks.mainImage} className='bookcover'/>
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.authors[0]}</h2>
            <Rating name="no-value" value={null} />
        </div>
    );
	
}

export default BookPage;