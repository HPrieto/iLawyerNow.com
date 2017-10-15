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
		this.centerMapOnAddress.bind(this);
	}
	componentWillMount() {
		// Initialize geocoder
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
	onClick(event) {
		console.log('Event: ' + event.target.id + " clicked!")
	}
	onChange(event) {
		console.log('Event: ' + event.target.id + ' changing!')
	}
	/* Handles address input change event */
	onAddressChange(event) {
		let address = event.target.value;
		this.centerMapOnAddress(address);
	}
	/* Handles location icon click event */
	destinationClicked(event) {
		console.log('Destination Clicked!');
		console.log('User Coordinates: ' + userCoordinates)
	}
	/* Returns object LatLng from address input string */
	centerMapOnAddress(address) {
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': address }, (results, status) => {
			if (status == 'OK' && address.length > 5) {
				let coordinates = results[0].geometry.location;
				var mapOptions = {
					center: coordinates,
	        		zoom: 12,
	        		mapTypeId: 'roadmap'
				}
				let map = new google.maps.Map(document.getElementById('map'), mapOptions);
			} else {
				var mapOptions = {
					center: new google.maps.LatLng(34.020442, -118.501748),
	        		zoom: 12,
	        		mapTypeId: 'roadmap'
				}
				let map = new google.maps.Map(document.getElementById('map'), mapOptions);
			}
		})
	}
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className="container home-container">
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
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
							<div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
								<img src={require('../img/oath_icon.png')}/>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
								<h1>Easiest way to justice</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.</p>
							</div>
						</div>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
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
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow" style={{margin: 0,padding: 0}}>
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
						<button onClick={this.onClick.bind(this)} className='btn green-btn' id="DefendantSignup">MEMBER SIGN UP&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className='container row-container-shifted-right founder-section'>
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-6 col-xl-6 founder-section-colrow">
							<div className="founder-section-txt zero-margin zero-padding">
								<h3>Our commitment to lawyers</h3>
								<h1>A better iLAWYER has arrived</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<button onClick={this.onClick.bind(this)} className="btn inverse-btn" id="AttorneySignup">ATTORNEY SIGN UP&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></button>
							</div>
						</div>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 founder-section-colrow">
							<div style={{width: '100%', height: 400, backgroundColor: 'black'}}/>
						</div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'white'}}>
					<div className='container row-container-shifted-right map-section'>
						<div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 map-section-txt">
							<h3>Pricing</h3>
							<h2>Attorneys, anywhere</h2>
							<div className='map-section-input col-xs-12 col-sm-8 col-md-8 zero-margin zero-padding'>
								<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 zero-padding zero-margin'>
									<input type='text' placeholder="Enter your location" id='userlocation' className='form-control form-userlocation form-input' onChange={this.onAddressChange.bind(this)} />
								</div>
								<div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 zero-padding zero-margin'>
									<span id='userlocation' onClick={this.destinationClicked.bind(this)} className="input-group-addon" style={{border: 'none', height: 50, backgroundColor: 'white', color: '#C6C6C6', fontSize: '1.5em'}}><i className="glyphicon glyphicon-map-marker"></i></span>
								</div>
							</div>
						</div>
						<div className="zero-margin zero-padding col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-8">
							<div className="map-container">
								<div id="map"/>
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className='container row-container'>
						
					</div>
				</div>
				<div className="row" style={{backgroundColor: 'black'}}>
					<div className='container row-container footer-section'>
						<div className="zero-padding zero-margin footer-top">
							<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
								<h1 className="zero-margin zero-padding">The Law Club</h1>
							</div>
							<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8">
								<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<button className="btn footer-lawyer-btn" id="LawyerSignup" onClick={this.onClick.bind(this)}>LAWYER SIGN UP</button>
								</div>
								<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<button className="btn footer-member-btn" id="MemberSignup" onClick={this.onClick.bind(this)}>MEMBER SIGN UP</button>
								</div>
							</div>
						</div>
						<div className="footer-bottom">
							<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-4 col-md-4 col-md-4">
								<h4 className="zero-padding zero-margin">®The Law Club Technologies</h4>
							</div>
							<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-8 col-md-8 col-md-8">
								<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
										<button className="footer-bottom-link" id="privacy" onClick={this.onClick.bind(this)}>Privacy</button>
									</div>
									<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
										<button className="footer-bottom-link" id="accessibility" onClick={this.onClick.bind(this)}>Accessibility</button>
									</div>
								</div>
								<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<button className="footer-bottom-link zero-margin" id="terms" onClick={this.onClick.bind(this)}>Terms</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Home;