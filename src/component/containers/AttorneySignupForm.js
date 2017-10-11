import React, { Component } from 'react';
import './containers.css';

class AttorneySignupForm extends Component {
		render() {
		return (
			<div className="container signup-lawyer-form-container">
				<div className="form-padding-container">
					<div className="row form-header-row">
						<div className="col-md-4">
							<img className='electronics-icon' src={require('../img/electronics_icon.png')}/>
						</div>
						<div className="col-md-8">
							<h1>Need an iLawyer?</h1>
							<button className="signup-form-button">SIGN UP &nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
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
									<input type='text' placeholder="First Name" className='form-control form-fname form-input'></input>
								</div>
								<div className="col-md-6">
									<input type='text' placeholder="Last Name" className='form-control form-lname form-input'></input>
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="Email" className='form-control form-input form-email'></input>
								</div>
								<div className='col-md-12'>
									<input type='text' placeholder="Phone" className='form-control form-input form-phone'></input>
								</div>
								<div className='col-md-12'>
									<input type='text' placeholder="Create Password" className='form-control form-input form-pass'></input>
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="City" className='form-control form-input form-city'></input>
								</div>
							</div>
							<div className='row signup-row'>
								<div className='col-md-12'>
									<input type='text' placeholder="Bar Number" className='form-control form-input form-id'></input>
								</div>
							</div>
							<button className="btn signup-btn">SIGN UP TO BECOME AN ILAWYER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"></span></button>
							<p className="signup-text">Or <a className="signup-tag">sign up </a> with your iLawyer account.</p>
							<p className="disclaimer">By proceeding, I agree that Uber or its representatives may contact me by email, phone, or SMS (including by automatic telephone dialing system) at the email address or number I provide, including for marketing purposes. I have read and understand the relevant Driver Privacy Statement.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default AttorneySignupForm;