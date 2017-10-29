import React, { Component } from 'react';
import './containers.css';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			attorney: true,
			form: {
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				password: '',
				city: '',
				barnumber: ''
			}
		}
	}
	onChange(event) {
		let formObject = Object.assign({}, this.state.form);
		formObject[event.target.id] = event.target.value.trim();
		console.log('Event Listening: ' + formObject[event.target.id])
		this.setState({form: formObject})
	}
	submitForm() {
		console.log('FirstName: ' + this.state.form.firstname)
		console.log('LastName : ' + this.state.form.lastname)
		console.log('Email    : ' + this.state.form.email)
		console.log('Phone Num: ' + this.state.form.phone)
		console.log('Password : ' + this.state.form.password)
		console.log('City     : ' + this.state.form.city)
		console.log('BarNumber: ' + this.state.form.barnumber)
	}
	render() {
		return (
			<div className="row"
				 style={{backgroundColor: '#F7F7F8'}}>
				<div className='container row-container'>
					<div className='signup-form-container'>
						<h2>Sign up now</h2>
						<form>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className="form-group">
							    	<input type="email"
								    	   className="form-control input-lg"
								    	   id="signup-email-input"
								    	   placeholder="Email"
								    	   onChange={this.onChange.bind(this)}/>
								</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className="form-group">
								<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
									<input type="text"
								    	   className="form-control input-lg"
								    	   id="signup-first-input"
								    	   placeholder="First Name"
								    	   onChange={this.onChange.bind(this)}/>
								</div>
								<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
									<input type="text"
								    	   className="form-control input-lg"
								    	   id="signup-last-input"
								    	   placeholder="Last Name"
								    	   onChange={this.onChange.bind(this)}/>
								</div>
								<input 	type="text"
								    	className="form-control input-lg"
								    	id="signup-phone-input"
								    	placeholder="Phone"/>
					    	   	<input 	type="password"
					    	   			className="form-control input-lg"
					    	   			id="signup-pass-input"
					    	   			placeholder="Create Password"
					    	   			onChange={this.onChange.bind(this)}/>
					    	   	</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className='form-group'>
									<input 	type="text"
						    	   			className="form-control input-lg"
						    	   			id="signup-bar-input"
						    	   			placeholder="Bar Number"
						    	   			onChange={this.onChange.bind(this)}/>
						    	</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className='form-group'>
									<input 	type="text"
						    	   			className="form-control input-lg"
						    	   			id="signup-pass-input"
						    	   			placeholder="Invite Code (Optional)"
						    	   			onChange={this.onChange.bind(this)}/>
						    	</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<button className='btn btn-lg'>
									<div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 zero-padding zero-margin'>
											SIGN UP
										</div>
										<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 zero-padding zero-margin'>
											<span className="glyphicon glyphicon-chevron-right"
												  style={{color:'white'}}/>
										</div>
								</button>
							</div>
							<div className='col-xs-12 col-sm-12 col-12-md col-12-lg col-xl-12'>
								<h4>Have an account? <span>Log In</span></h4>
							</div>
							<div className='col-xs-12 col-sm-12 col-12-md col-12-lg col-xl-12'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
									Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
									Ut enim ad minim veniam.Lorem ipsum dolor sit amet.
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default SignupForm;