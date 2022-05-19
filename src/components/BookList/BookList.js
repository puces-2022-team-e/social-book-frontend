import React from 'react';
import cookie from 'react-cookies';
import BookItem from './BookItem';
import { CircularProgress } from '@mui/material'
import '../../App.css'
import { url_base } from '../../constans';

export default class BookList extends React.Component {
	state = {
		loading: true,
		books: null,
	};

	async componentDidMount() {
		const url = `${url_base}b`
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
