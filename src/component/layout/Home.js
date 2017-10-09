import React, { Component } from 'react';
import './layout.css';

// Module components
import AttorneySignupForm from '../containers/AttorneySignupForm.js';

class Home extends Component {
	render() {
		return (
			<div className="container home-container">
				<AttorneySignupForm />
				<div className="mission-statement">
					<h1>Breath in</h1>
					<h2>Let an iLawyer handle it for you</h2>
				</div>
				<div className="home-img"/>
			</div>
		)
	}
}
export default Home;