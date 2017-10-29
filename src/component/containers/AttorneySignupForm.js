import React, { Component } from 'react';
import './containers.css';

class AttorneySignupForm extends Component {
	constructor() {
		super()
		this.state = {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				phone: '',
				password: '',
				city: '',
				barnumber: ''
			}
		}
	}
	onChange(event) {
		let formObject = Object.assign({}, this.state.form);
		formObject[event.target.id] = event.target.value.trim();
		console.log('Event Listening: ' + formObject[event.target.id])
		this.setState({form: formObject})
	}
	submitForm() {
		console.log('FirstName: ' + this.state.form.firstname)
		console.log('LastName : ' + this.state.form.lastname)
		console.log('Email    : ' + this.state.form.email)
		console.log('Phone Num: ' + this.state.form.phone)
		console.log('Password : ' + this.state.form.password)
		console.log('City     : ' + this.state.form.city)
		console.log('BarNumber: ' + this.state.form.barnumber)
	}
	render() {
		return (
			<div className="container">
				<div className="separator">OR</div>
			</div>
		)
	}
}
export default AttorneySignupForm;