import React from 'react';
import './styles/sign_up_lawyer_form.css';

class SignupLawyerForm extends React.Component {
	render() {
		return (
			<div className="container signup-lawyer-form-container">
				<div className="form-padding-container">
					<div className="row form-header-row">
						<div className="col-md-4">
							<div class='electronics-icon'/>
						</div>
						<div className="col-md-8">
							<h1>Need an iLawyer?</h1>
							<button className="signup-form-button">SIGN UP</button>
						</div>
					</div>
					<a className="form-divider">OR</a>
					<div className="row signup-form">
						<div className="col-md-4">
							<div class='agree-icon'/>
						</div>
						<div className="col-md-8">
							<h1>Become an iLawyer</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SignupLawyerForm;