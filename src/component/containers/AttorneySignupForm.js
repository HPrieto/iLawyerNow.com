import React, { Component } from 'react';
import './containers.css';

class AttorneySignupForm extends Component {
	constructor() {
		super()
		this.state = {
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
			<div className="container signup-lawyer-form-container">
				<div className="form-padding-container">
					<div className="row form-header-row">
						<div className="col-md-4">
							<img className='electronics-icon' src={require('../img/electronics_icon.png')}/>
						</div>
						<div className="col-md-8">
							<h1>Need an Attorney?</h1>
							<button className="signup-form-button">MEMBER SIGN UP &nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
						</div>
					</div>
					<div className="separator">OR</div>
					<div className="row signup-form-container">
						<div className="col-md-4">
							<img className='agree-icon' src={require('../img/agree_icon.png')}/>
						</div>
						<div className="col-md-8">
							<h1>Become an iLawyer</h1>
						</div>
						<div className="input-group signup-form">
							<div className="row signup-row1">
								<div className="col-md-6">
									<input type='text' placeholder="First Name" id='firstname' className='form-control form-fname form-input' onChange={this.onChange.bind(this)} />
								</div>
								<div className="col-md-6">
									<input type='text' placeholder="Last Name" id='lastname' className='form-control form-lname form-input' onChange={this.onChange.bind(this)} />
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="Email" id='email' className='form-control form-input form-email' onChange={this.onChange.bind(this)} />
								</div>
								<div className='col-md-12'>
									<input type='text' placeholder="Phone" id='phone' className='form-control form-input form-phone' onChange={this.onChange.bind(this)} />
								</div>
								<div className='col-md-12'>
									<input type='password' placeholder="Create Password" id='password' className='form-control form-input form-pass' onChange={this.onChange.bind(this)} />
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="City" id='city' className='form-control form-input form-city' onChange={this.onChange.bind(this)} />
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="Bar Number" id='barnumber' className='form-control form-input form-id' onChange={this.onChange.bind(this)} />
								</div>
							</div>
							<button onClick={this.submitForm.bind(this)} className="btn signup-btn">ATTORNEY SIGN UP &nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"></span></button>
							<p className="signup-text">Or <a className="signup-tag">sign in </a> with your iLawyer account.</p>
							<p className="disclaimer">By proceeding, I agree that Uber or its representatives may contact me by email, phone, or SMS (including by automatic telephone dialing system) at the email address or number I provide, including for marketing purposes. I have read and understand the relevant Driver Privacy Statement.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default AttorneySignupForm;