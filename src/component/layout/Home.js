import React, { Component } from 'react';
import './layout.css';

// Module components
import AttorneySignupForm from '../containers/AttorneySignupForm.js';
import MiniSignupForm from '../presentation/MiniSignupForm.js';

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
				{this.state.form}
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container mission-section'>
						<h1>Get there</h1>
						<h2>Your day belongs to you</h2>
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
								<p>One tap and a car comes directly to you. Hop in—your 
									driver knows exactly where to go. And when you get there, 
									just step out. Payment is completely seamless.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/court_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Anywhere, anytime</h1>
								<p>Daily commute. Errand across town. Early morning flight. 
								Late night drinks. Wherever you’re headed, count on Uber 
								for a ride—no reservations required.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/book_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Low-cost to justice</h1>
								<p>Economy cars at everyday prices are always available. 
								For special occasions, no occasion at all, or when you 
								just need a bit more room, call a black car or SUV.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section-signup'>
						<button className='btn green-btn'>REASONS TO RIDE&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className='container row-container founder-section'>
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 founder-section-colrow">
							<div className="founder-section-txt">
								<h3>Our commitment to lawyers</h3>
								<h1>A better iLAWYER has arrived</h1>
								<p>Our latest phase of 180 Days of Change is focused on POOL improvements 
								that help you earn more and stress less. We’re directly addressing your 
								feedback, with a new way to earn and upgrades that will make for better 
								rides and ratings on POOL.</p>
								<button className="btn inverse-btn">LEARN MORE&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
							</div>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 founder-section-colrow">
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