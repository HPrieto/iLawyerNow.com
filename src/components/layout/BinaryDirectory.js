import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

import Footer from '../presentation/Footer.js';

class BinaryDirectory extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		scroll(0,0)
	}
	render() {
		let tanColor = '#F7F7F8';
		return (
			<div className='container main-container binary-container'>
				<div className="row"
					 style={{backgroundColor: tanColor}}>
					<div className="white-left-binary-container container">
						<div className='white-left-binary-container-body'>
							<h1>{this.props.header}</h1>
							<div className='white-left-binary-container-body-bottom zero-margin zero-padding'>
								<div className='col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 zero-padding zero-margin'>
									<h3 className='hide-in-mobile'>
										{this.props.titles[0]}
									</h3>
									<h4 className='transparent-on-mobile'>
										{this.props.descriptions[0]}
									</h4>
									<Link to={this.props.to[0]}
										  className='btn white-left-binary-container-body-btn'>
										<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
  											{this.props.buttonNames[0]}
  										</div>
  				                        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
  				                            <img src={require('../img/right-arrow.png')}
												 style={{width:20,height:20}}/>
  				                        </div>
									</Link>
								</div>
								<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 zero-padding zero-margin'>
									<h3 className='hide-in-mobile'>
										{this.props.titles[1]}
									</h3>
									<h4 className='transparent-on-mobile'>
										{this.props.descriptions[1]}
									</h4>
									<Link to={this.props.to[1]}
										  className='btn white-left-binary-container-body-btn white-left-binary-container-body-btn-inverse'
										  style={{minWidth:225}}>
										<div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
											{this.props.buttonNames[1]}
										</div>
				                        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
				                            <img src={(window.innerWidth < 678)?require('../img/right-arrow-green.png'):require('../img/right-arrow.png')}
												 style={{width:20,height:20}}/>
				                        </div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row"
					 style={{backgroundColor: tanColor}}>
					<div className='container row-container image-row-container'>
					</div>
				</div>
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']}
						buttonIds={['LawyerSignup', 'MemberSignup']} />
			</div>
		)
	}
}
export default BinaryDirectory;
