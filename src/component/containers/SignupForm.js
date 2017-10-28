import React, { Component } from 'react';
import './containers.css';

class SignupForm extends Component {
	render() {
		return (
			<div className="row"
				 style={{backgroundColor: '#F7F7F8'}}>
				<div className='container row-container signup-form-container'>
					<form>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
							<div className="form-group">
						    	<input type="email"
							    	   className="form-control input-lg"
							    	   id="signup-email-input"
							    	   placeholder="Email" />
							</div>
						</div>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
							<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
								<input type="text"
							    	   className="form-control input-lg"
							    	   id="signup-first-input"
							    	   placeholder="First Name"/>
							</div>
							<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
								<input type="text"
							    	   className="form-control input-lg"
							    	   id="signup-last-input"
							    	   placeholder="Last Name"/>
							</div>
							<input 	type="text"
							    	className="form-control input-lg"
							    	id="signup-phone-input"
							    	placeholder="Phone"/>
				    	   	<input 	type="password"
				    	   			className="form-control input-lg"
				    	   			id="signup-pass-input"
				    	   			placeholder="Create Password"/>
						</div>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>

						</div>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
							<button className='btn btn-lg'>SIGNUP</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default SignupForm;