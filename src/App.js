import logo from './logo.svg';
import './App.css';
import React from 'react';
import FetchBooks from './components/FetchBooks';
class App extends React.Component {
	state = {
		visible: true,
	};

	render(){
		return (
			<div className="App"> 
				<FetchBooks />
			</div>
		)
	}
}

export default App;
