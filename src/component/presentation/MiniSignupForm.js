import React, { Component } from 'react';
import styles from './presentation.css';

class MiniSignupForm extends Component {
	render() {
		return (
			<div className="container mini-signup-form">
				<div className='row'>
					<h2>Start riding with Uber</h2>
				</div>
				<div className='row'>
					<h3>GET THE APP&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right"/></h3>
				</div>
			</div>
		)
	}
}
export default MiniSignupForm;