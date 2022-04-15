import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import About from './components/About';
import Home from './components/Home/Home';
import Login from './components/Login';
import FetchBooks from './components/FetchBooks';
class App extends React.Component {
	state = {
		visible: true,
	};

	render(){
		return (
			<div className="App"> 
				<BrowserRouter>
					<Routes>
						<Route path='/fetchbooks' element={<FetchBooks />} />
						<Route path='/about'  element={<About />} />
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
