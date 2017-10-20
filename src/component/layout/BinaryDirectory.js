import React, { Component } from 'react';
import './layout.css';

class BinaryDirectory extends Component {
	componentWillMount() {
		console.log('Binary Directory')
	}
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className='container main-container sign-container'>
				<div className="row" style={{backgroundColor: tanColor}}>
					<div className="white-left-sign-container container">
						<div className='white-left-sign-container-body'>
							<h1>{this.props.header}</h1>
							<div className='white-left-sign-container-body-bottom zero-margin zero-padding'>
								<div className='col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 zero-padding zero-margin'>
									<h3 className='hide-xs'>{this.props.titles[0]}</h3>
									<p className='hide-xs'>{this.props.descriptions[0]}</p>
									<button className='btn white-left-sign-container-body-btn'>
										<div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 zero-padding zero-margin'>{this.props.buttonNames[0]}</div>
										<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 zero-padding zero-margin'><span className="glyphicon glyphicon-chevron-right"/></div>
									</button>
								</div>
								<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 zero-padding zero-margin'>
									<h3 className='hide-xs'>{this.props.titles[1]}</h3>
									<p className='hide-xs'>{this.props.descriptions[1]}</p>
									<button className='btn white-left-sign-container-body-btn white-left-sign-container-body-btn-inverse'>
										<div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 zero-padding zero-margin'>{this.props.buttonNames[1]}</div>
										<div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 zero-padding zero-margin'><span className="glyphicon glyphicon-chevron-right"/></div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default BinaryDirectory;