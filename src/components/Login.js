import React, { Component } from 'react';
import BaseComponent from './BaseComponent/BaseComponent';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class Login extends Component {
	
	constructor() {
		super();
		this.appId = '963927842810-or0j5j8kmvf4c01hd15bbompaqut7qpu.apps.googleusercontent.com';
		this.state = {
			isLoggedIn: false,
			userGoogleData: {
				id: '',
				name: '',
				email: '',
				photo: '',
			},
		};
	}

	loginSuccess = (response) => {
		let userGoogleData = {
			id: response.profileObj.googleId,
			name: response.profileObj.name,
			email: response.profileObj.email,
			photo: response.profileObj.imageUrl,
		};
		this.setState({ userGoogleData, isLoggedIn: true });
	};

	loginError = (response) => {
		console.error(response);
	};

	logout = (response) => {
		console.log(response);
		let userGoogleData = {
			id: '',
			name: '',
			email: '',
			photo: '',
		};
		this.setState({ userGoogleData, isLoggedIn: false });
	};

	render() {
		return (
			<BaseComponent>
				<div className="container">
					{this.state.isLoggedIn ? (
						<div>
							<GoogleLogout
								clientId={this.appId}
								buttonText={'Sair'}
								onLogoutSuccess={this.logout}
							></GoogleLogout>
						</div>
					) : (
						<GoogleLogin
							clientId={this.appId}
							buttonText="Login usando Google"
							onSuccess={this.loginSuccess}
							onFailure={this.loginError}
							isSignedIn={true}
						/>
					)}
				</div>
			</BaseComponent>
		);
	}
}

export default Login;
