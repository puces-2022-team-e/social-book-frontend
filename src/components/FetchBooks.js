import React from 'react';
export default class FetchBooks extends React.Component {
	state = {
		loading: true,
		books: null,
	};

	async componentDidMount() {
		console.log('fetching books');
		const url = 'https://cherry-tart-55973.herokuapp.com/api/v1/b';

		const response = await fetch(url, {
			method: 'GET',
		});

		const allBooks = await response.json();

		this.setState({ loading: false, books: allBooks.books });
	}

	render() {
		console.log('rendering');
		if (this.state.loading) {
			return <div>Loading books ... </div>;
		}

		if (!this.state.books) {
			return <div>There's no books</div>;
		}

		return (
			<div>
				{ this.state.books.map(book => (
					<div>
						<div><br></br></div>
						<div>{book.title}</div>
						<div>{book.authors[0]}</div>
						<img src={book.imageLinks.mainImage} width="250" height="300" />
						<div> { `Average Rating: ${ printStars(book.averageRating)}` } </div>
						<div><br></br></div>
					</div>
				))}
					
			</div>
		);
	}
}


//Print mockup for rating stars
function printStars(nStars){
	let cStars = "["
	console.log(`Average Rating: ${nStars}`);
	if ( nStars === 0){
		return cStars += "  ]"
	}

	for (let i = 0 ; i  < nStars ; i++){
		cStars += "*"
	}

	return cStars += "]"
}