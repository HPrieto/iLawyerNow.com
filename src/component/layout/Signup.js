import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

/* Import Components */
import SignupForm from '../containers/SignupForm.js';

class Signup extends Component {
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className='container main-container signup-container'>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container signup-header-section'>
						<div className='col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10'>
							<h1>Ride with Uber</h1>
							<h2>Earn money on your schedule</h2>
						</div>
						<div className='col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2'></div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'black'}}>
					<div className='container row-container'>
						<img className='signup-image-section'/>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white', height: '500px'}}>
					<div className='container row-container'>
						
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor, height: '500px'}}>
					<div className='container row-container'>
						
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white', height: '500px'}}>
					<div className='container row-container'>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Signup;