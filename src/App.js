import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/BaseComponent/Header';
import Footer from './components/BaseComponent/Footer';
import About from './components/About';
import Home from './components/Home/Home';
import Login from './components/Login';
import FetchBooks from './components/FetchBooks';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import BookPage from './components/BookPage/BookPage';
import BookList from './components/BookList/BookList';
import BookRegister from './components/BookRegister/BookRegister';
import Helmet from 'react-helmet';
import DiscussionPage from './components/DiscussionPage/DiscussionPage';

const App = () => {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		isLoggedIn: cookie.load('isLoggedIn') || false,
		userGoogleData: {
			id: cookie.load('userId') || '',
			name: cookie.load('userName') || '',
			email: cookie.load('userEmail') || '',
			photo: cookie.load('userPhoto') || '',
		},
	});

	const onLoginSuccess = (response) => {
		const userGoogleData = {
			id: response.profileObj.googleId,
			name: response.profileObj.name,
			email: response.profileObj.email,
			photo: response.profileObj.imageUrl,
		};

		//toDo make a function to handle the cookies
		cookie.save('loginToken', response.tokenId);
		cookie.save('userId', response.profileObj.googleId);
		cookie.save('userName', response.profileObj.name);
		cookie.save('userEmail', response.profileObj.email);
		cookie.save('userPhoto', response.profileObj.imageUrl);
		cookie.save('isLoggedIn', true);

		console.log(response.tokenId);
		console.log(userGoogleData);
		setUserInfo({ userGoogleData, isLoggedIn: cookie.load('isLoggedIn') });
		navigate('/');
	};

	const onLoginError = (response) => {
		console.error(response);
	};

	const onLogout = (response) => {
		const userGoogleData = {
			id: '',
			name: '',
			email: '',
			photo: '',
		};
		cookie.remove('loginToken', '');
		cookie.remove('userId', '');
		cookie.remove('loginToken', '');
		cookie.remove('userName', '');
		cookie.remove('userEmail', '');
		cookie.remove('userPhoto', '');
		cookie.save('isLoggedIn', false);
		setUserInfo({ userGoogleData, isLoggedIn: false });
	};

	return (
		<div className="App">
			<Helmet>
				<title>Social Book</title>
			</Helmet>
			<Header userInfo={userInfo} />
			<Routes>
				<Route path="/fetchbooks" element={<FetchBooks />} />
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Home />} />
				<Route path="/books/:short" element={<BookPage />} />
				<Route path="/books" element={<BookList />} />
				<Route path="/bookregister" element={<BookRegister />} />
				<Route path="/d/:id" element={<DiscussionPage />} />
				<Route
					path="/login"
					element={
						<Login
							userInfo={userInfo}
							onSuccess={onLoginSuccess}
							onLogout={onLogout}
							onError={onLoginError}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
