import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Header from './components/BaseComponent/Header';
import Footer from './components/BaseComponent/Footer';
import About from './components/About';
import Home from './components/Home/Home';
import Login from './components/Login';
import FetchBooks from './components/FetchBooks';
import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		isLoggedIn: false,
		userGoogleData: {
			id: '',
			name: '',
			email: '',
			photo: '',
		},
	});

	const onLoginSuccess = (response) => {
		const userGoogleData = {
			id: response.profileObj.googleId,
			name: response.profileObj.name,
			email: response.profileObj.email,
			photo: response.profileObj.imageUrl,
		};
		console.log(userGoogleData)
		setUserInfo({ userGoogleData, isLoggedIn: true });
		navigate('/');
	};

	const onLoginError = (response) => {
		console.error(response);
	};

	const onLogout = (response) => {
		console.log(response);
		const userGoogleData = {
			id: '',
			name: '',
			email: '',
			photo: '',
		};
		setUserInfo({ userGoogleData, isLoggedIn: false });
	};
	console.log(typeof onLoginSuccess)
	return (
		<div className="App"> 
			<Header userInfo={userInfo}/>
				<Routes>
					<Route path='/fetchbooks' element={<FetchBooks />} />
					<Route path='/about'  element={<About />} />
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login userInfo={userInfo} onSuccess={onLoginSuccess} onLogout={onLogout} onError={onLoginError}/>} />
				</Routes>
			<Footer />
		</div>
	)
}

export default App;
