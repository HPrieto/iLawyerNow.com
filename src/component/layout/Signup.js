import React, { Component } from 'react';
import './layout.css';

/* Import Components */
import SignupForm from '../containers/SignupForm.js';

class Signup extends Component {
	render() {
		return (
			<div className='container-fluid signup-container'>
				<div className='signup-body'>
					<h1>Become a Law Club Member</h1>
					<SignupForm />
				</div>
			</div>
		)
	}
}
export default Signup;