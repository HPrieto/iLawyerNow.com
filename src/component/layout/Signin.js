import React, { Component } from 'react';
import './layout.css';

// import components
import Footer from '../presentation/Footer.js';

class Signin extends Component {
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className='container main-container sign-container'>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className="white-left-sign-container container">
						<div className='white-left-sign-container-body'>
							<h1>Sign In</h1>
							<div className='white-left-sign-container-body-bottom zero-margin zero-padding'>
								<div className='col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 zero-padding zero-margin'>
									<h3 className='hide-xs'>Attorney</h3>
									<p className='hide-xs'>Find everything you need to track your success on the road.</p>
									<button className='btn white-left-sign-container-body-btn'>ATTORNEY SIGN IN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
								</div>
								<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 zero-padding zero-margin'>
									<h3 className='hide-xs'>Member</h3>
									<p className='hide-xs'>Manage your payment options, review trip history, and more.</p>
									<button className='btn white-left-sign-container-body-btn white-left-sign-container-body-btn-inverse'>MEMBER SIGN IN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']} buttonIds={['LawyerSignup', 'MemberSignup']} />
			</div>
		)
	}
}
export default Signin;