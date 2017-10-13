import React, { Component } from 'react';
import './containers.css';

class Footer extends Component {
	render() {
		return (
			<div className='row container footer'>
				<div className='footer-container'>
					<div className='row footer-top'>
						<div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
							<h1>The Law Club</h1>
						</div>
						<div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
						</div>
					</div>
					<div className='row footer-bottom'>
						<div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
							<h4>®2017 iLawyer Technologies Inc.</h4>
						</div>
						<div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
							<h4>Privacy</h4>
							<h4>Accessibility</h4>
						</div>
						<div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
							<h4>Terms</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Footer;