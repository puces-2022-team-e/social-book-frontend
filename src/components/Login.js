import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { appId } from '../constans';

const Login = ({ userInfo, onSuccess, onLogout, onError }) => {

	return (
		<div className="container">
			{userInfo.isLoggedIn ? (
				<div>
					<GoogleLogout
						clientId={appId}
						buttonText={'Sair'}
						onLogoutSuccess={onLogout}
					></GoogleLogout>
				</div>
			) : (
				<GoogleLogin
					clientId={appId}
					buttonText="Login usando Google"
					onSuccess={onSuccess}
					onFailure={onError}
					isSignedIn={true}
				/>
			)}
		</div>
	);
}

export default Login;
