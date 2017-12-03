import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

// Module components
import AttorneySignupForm from '../containers/AttorneySignupForm.js';
import MiniSignupForm from '../presentation/MiniSignupForm.js';
import IconComponent from '../presentation/IconComponent.js';
import Footer from '../presentation/Footer.js';

const google = window.google

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
		scroll(0,0)
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
		console.log('Event: ' + event.target.id + ' address changing!')
		let address = event.target.value;
		this.centerMapOnAddress(address);
	}
	/* Handles location icon click event */
	destinationClicked(event) {
		console.log('Destination Clicked!');
		console.log('User Coordinates: ' + userCoordinates)
	}
	/* Centers MapView to address coordinate location */
	centerMapOnAddress(address) {
		console.log('Event: changing address to => ' + address)
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': address }, (results, status) => {
			if ((status == 'OK' && address.length > 5)) {
				let coordinates = results[0].geometry.location;
				let mapOptions = {
					center: coordinates,
	        		zoom: 12,
	        		mapTypeId: 'roadmap'
				}
				let map = new google.maps.Map(document.getElementById('map'), mapOptions);
			} else if (status == 'OK' && address.length <= 5) {
				let mapOptions = {
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
			<div className="container main-container">
				{this.state.form}
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container mission-section'>
						<h1>Making connections</h1>
						<h2>Your peace belongs to you</h2>
					</div>
				</div>
				<div className="row"
					 style={{backgroundColor: 'black'}}>
					<img className='image-section'/>
				</div>
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section'>
						<IconComponent
							imageURL={require('../img/oath_icon.png')}
							title='Easiest way to justice'
							desc="Stand up for your rights at the time of trouble with the right legal
								  defense team. Don't argue with police, simply get the right legal
								  representation on your iphone, android or smartphone at a low cost before having to end
								  up in court, beaten or killed."/>
						<IconComponent
							imageURL={require('../img/court_icon.png')}
							title='Anywhere, anytime'
							desc="Don't be a victim on your next traffic stop, call us when it's urgent, or if
								  you simply are in need of a legal defense. Live to fight another day and remain
								  silent with with peace of mind while one of out iLawyerNow attorney members does the
								  talking."/>
						<IconComponent
							imageURL={require('../img/book_icon.png')}
							title='Low-cost to justice'
							desc="iLawyerNow.com is dedicated to helping individuals, businesses, Uber, Lyft, Truck
								  drivers, delivery drivers and more. If you are having connection problems simply
								  call (323)600-5366. Available on FaceTime with iPhone."/>
					</div>
				</div>
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section-signup'>
						<Link 	to='/member/signup'
								className='btn green-btn'
								id="DefendantSignup">
								<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
									MEMBER SIGN UP
								</div>
								<div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
									<img src={require('../img/right-arrow.png')}
										 style={{width:20,height:20}}/>
								</div>
						</Link>
					</div>
				</div>
				<div className="row"
					 style={{backgroundColor: tanColor}}>
					<div className='container row-container-shifted-right founder-section'>
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-6 col-xl-6 founder-section-colrow">
							<div className="founder-section-txt zero-margin zero-padding">
								<h3>Our commitment to lawyers</h3>
								<h1>A better iLAWYER has arrived</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<Link to='/attorney/signup'
									  onClick={this.onClick.bind(this)}
									  className="btn inverse-btn"
									  id="AttorneySignup">ATTORNEY SIGN UP&nbsp;&nbsp;&nbsp;
									<span className="glyphicon glyphicon-chevron-right"/>
								</Link>
							</div>
						</div>
						<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 founder-section-colrow">
							<div style={{width: '100%', height: 400, backgroundColor: 'black'}}/>
						</div>
					</div>
				</div>
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container-shifted-right map-section'>
						<div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 map-section-txt">
							<h3>Pricing</h3>
							<h2>Attorneys, anywhere</h2>
							<div className='map-section-input-container col-xs-12 col-sm-8 col-md-8'>
								<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 zero-padding'>
									<input type='text'
										   placeholder="Enter your location"
										   id='userlocation'
										   className='form-control form-input'
										   onChange={this.onAddressChange.bind(this)} />
								</div>
								<div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 zero-padding zero-margin'>
									<span id='userlocation'
										  onClick={this.destinationClicked.bind(this)}
										  className="input-group-addon"
										  style={{border:'none',height:50,backgroundColor:'white',color:'#C6C6C6',fontSize:'1.5em'}}>
										  <i className="glyphicon glyphicon-map-marker"/>
									</span>
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
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']}
						buttonIds={['LawyerSignup', 'MemberSignup']}/>
			</div>
		)
	}
}
export default Home;
