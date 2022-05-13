import React from 'react';
import cookie from 'react-cookies';
import BookItem from './BookItem';
import { CircularProgress } from '@mui/material'
import '../../App.css'

export default class BookList extends React.Component {
	state = {
		loading: true,
		books: null,
	};

	async componentDidMount() {
		const url = 'https://cherry-tart-55973.herokuapp.com/api/v1/b';
		//const url = `http://localhost:8077/api/v1/b`
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: cookie.load('loginToken'),
			},
		});
		const allBooks = (await response.json());

		this.setState({ loading: false, books: allBooks });
	}

	render() {
		console.log('rendering');
		if (this.state.loading) {
			return (
			<div className='progressbar'>
				<CircularProgress />
			</div>);
		}

		if (!this.state.books) {
			return <div>There's no books</div>;
		}

		if (this.state.books.error) {
			return <div>{this.state.books.error}</div>
		}

		return (
			<div>
				{this.state.books.map((book) => (
					<BookItem key={book.id} data={book} />
				))}
			</div>
		);
	}
}

//Print mockup for rating stars
function printStars(nStars) {
	let cStars = '[';
	console.log(`Average Rating: ${nStars}`);
	if (nStars === 0) {
		return (cStars += '  ]');
	}

	for (let i = 0; i < nStars; i++) {
		cStars += '*';
	}

	return (cStars += ']');
}
