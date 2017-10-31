import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

/* Import Components */
import SignupForm from '../containers/SignupForm.js';
import AttorneySignupForm from '../containers/AttorneySignupForm.js';
import IconComponent from '../presentation/IconComponent.js';
import Footer from '../presentation/Footer.js';

class Signup extends Component {
	constructor(props) {
	    super(props)
	}
	componentWillMount() {
	}
	componentDidMount() {
	}
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
							<h1>{this.props.header}</h1>
							<h2>{this.props.subheader}</h2>
						</div>
					</div>
				</div>
				{(this.props.attorney)?<AttorneySignupForm/>:<SignupForm/>}
				<div className="row"
					 style={{backgroundColor: 'black'}}>
					<img className='image-section signup-container-bg'/>
				</div>
				<div className="row"
					 style={{backgroundColor: 'white'}}>
					<div className='container row-container product-section'>
						<IconComponent  imageURL={this.props.images[0]}
										title={this.props.imageTitle[0]}
										desc={this.props.imageDesc[0]}/>

						<IconComponent  imageURL={this.props.images[1]}
										title={this.props.imageTitle[1]}
										desc={this.props.imageDesc[1]}/>

						<IconComponent  imageURL={this.props.images[2]}
										title={this.props.imageTitle[2]}
										desc={this.props.imageDesc[2]}/>
					</div>
				</div>
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']}
						buttonIds={['LawyerSignup', 'MemberSignup']} />
			</div>
		)
	}
}
export default Signup;
