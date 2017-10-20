import React, { Component } from 'react';
import './presentation.css';

class Footer extends Component {
	constructor() {
		super()
	}
	onClick(event) {
		console.log('Footer Clicked: ' + event.target.id)
	}
	render() {
		return (
			<div className="row" style={{backgroundColor: 'black'}}>
				<div className='container row-container footer-section'>
					<div className="zero-padding zero-margin footer-top">
						<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<h1 className="zero-margin zero-padding">The Law Club</h1>
						</div>
						<div className="zero-padding zero-margin col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8">
							<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
								<button className="btn footer-lawyer-btn" id={this.props.buttonIds[0]} onClick={this.onClick.bind(this)}>{this.props.buttonNames[0]}</button>
							</div>
							<div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
								<button className="btn footer-member-btn" id={this.props.buttonIds[1]} onClick={this.onClick.bind(this)}>{this.props.buttonNames[1]}</button>
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
		)
	}
}
export default Footer;