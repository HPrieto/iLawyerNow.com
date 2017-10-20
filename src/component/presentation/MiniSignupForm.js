import React, { Component } from 'react';
import styles from './presentation.css';

class MiniSignupForm extends Component {
	onClick(event) {	
		console.log('MiniSignupForm: ' + event.target.id);
	}
	render() {
		return (
			<button className="container mini-signup-form" id="MiniSignupForm" onClick={this.onClick.bind(this)}>
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