import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

/* Import Components */
import SignupForm from '../containers/SignupForm.js';
import Footer from '../presentation/Footer.js';

class Signup extends Component {
	onClick(event) {
		console.log('Event Clicked: ' + event.target.value)
	}
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className="container main-container signup-container">
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container mission-section'>
						<div className='col-xs-12 col-sm-7 col-md-8 col-lg-12 col-xl-12'>
							<h1>Become a mobile Attorney</h1>
							<h2>Earn money on your schedule</h2>
						</div>
					</div>
				</div>
				<SignupForm />
				<div className="row"
					 style={{backgroundColor: 'black'}}>
					<img className='image-section signup-container-bg'/>
				</div>
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section'>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow"
							 style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/moneytree.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Make great money</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow"
							 style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/watch.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Set your own schedule</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow"
							 style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/smartphone.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Signing up is easy</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
				</div>
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']}
						buttonIds={['LawyerSignup', 'MemberSignup']} />
			</div>
		)
	}
}
export default Signup;