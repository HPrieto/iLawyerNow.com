import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './containers.css';

class AttorneySignupForm extends Component {
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
						<div className='form-icons'>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
									<div className='electronics-icon'/>
								</div>
								<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
									<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
										<h3>Become a Member</h3>
									</div>
									<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
										<Link to='/member/signup'
											  className='green-txt'>SIGNUP
											  <span className="glyphicon glyphicon-chevron-right"
														style={{paddingLeft:'10px'}}/>
										</Link>
									</div>
								</div>
							</div>
							<div className="separator col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">OR</div>
							<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
								<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
									<div className='agree-icon'/>
								</div>
								<div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
									<h3>Signup now</h3>
								</div>
							</div>
						</div>
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
								    	placeholder="Phone"
								    	onChange={this.onChange.bind(this)}/>

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
								<button className='btn btn-lg green-btn'>
									<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
										SIGN UP
									</div>
									<div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
										<img src={require('../img/right-arrow.png')}
											 style={{width:20,height:20}}/>
									</div>
								</button>
							</div>
							<div className='col-xs-12 col-sm-12 col-12-md col-12-lg col-xl-12'>
								<h4>Have an account? <Link to='/signin/attorney'><span className='green-txt'>Log In</span></Link></h4>
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
export default AttorneySignupForm;
