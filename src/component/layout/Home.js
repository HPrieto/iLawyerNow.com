import React, { Component } from 'react';
import './layout.css';

// Module components
import AttorneySignupForm from '../containers/AttorneySignupForm.js';
import MiniSignupForm from '../presentation/MiniSignupForm.js';
import Navbar from '../containers/Navbar.js';

class Home extends Component {
	constructor() {
		super()
		this.state = {
			form: <MiniSignupForm />
		}
		this.updateDimensions.bind(this);
	}
	componentWillMount() {
	}
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	updateDimensions() {
		let windowWidth = window.innerWidth;
		let form = (windowWidth < 992) ? <MiniSignupForm /> : <AttorneySignupForm />; 
		this.setState({
			form: form
		})
	}
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className="container home-container">
				<Navbar/>
				{this.state.form}
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container mission-section'>
						<h1>Get help</h1>
						<h2>Your peace belongs to you</h2>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'black'}}>
					<img className='image-section'/>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section'>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/oath_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Easiest way justice</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/court_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Anywhere, anytime</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/book_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Low-cost to justice</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section-signup'>
						<button className='btn green-btn'>DEFENDANT SIGN UP&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className='container row-container founder-section'>
						<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 founder-section-colrow">
							<div className="founder-section-txt">
								<h3>Our commitment to lawyers</h3>
								<h1>A better iLAWYER has arrived</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<button className="btn inverse-btn">ATTORNEY SIGN UP&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 founder-section-colrow">
							<img/>
						</div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container'>
						
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className='container row-container'>
						
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container'>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Home;