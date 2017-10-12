import React, { Component } from 'react';
import styles from './presentation.css';

class MiniSignupForm extends Component {
	clicked(event) {	
		console.log('MiniSignupForm: Clicked');
	}
	render() {
		return (
			<button className="container mini-signup-form" onClick={this.clicked.bind(this)}>
				<div className='row'>
					<h2>Get help from an Attorney</h2>
				</div>
				<div className='row'>
					<h3>GET THE APP&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></h3>
				</div>
			</button>
		)
	}
}
export default MiniSignupForm;