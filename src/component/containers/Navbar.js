import React from 'react';
import { Link, Route } from 'react-router-dom';
import './containers.css';

class Navbar extends React.Component {
	constructor() {
		super()
		this.toggleHamburger.bind(this);
	}
	componentWillMount() {
	}
	onClick(event) {
		this.toggleHamburger();
	}
	toggleHamburger() {
		$('.menu-top').toggleClass('menu-top-click');
	    $('.menu-middle').toggleClass('menu-middle-click');
	    $('.menu-bottom').toggleClass('menu-bottom-click');
	    $('.body').toggleClass($('body').css('overflow', function(_, val) {
	    	return val == 'hidden' ? 'scroll' : 'hidden';
	    }));
	    $('.body').toggleClass($('body').css('position', function(_, val) {
	    	return val == 'fixed' ? 'static' : 'fixed';
	    }));
	    event.preventDefault();
	}
	render() {
		return (
			<div className='navbar navbar-fixed-top home-navbar'>
				<div className='container-fluid home-navbar-container'>
					<div className='navbar-header'>
						<div className="navbar-toggle menu" 
							 data-toggle="collapse" 
							 data-target="#home-navbar-collapse" 
							 id="nav-icon4">
		                    <span className="menu-global menu-top"    />
		                    <span className="menu-global menu-middle" />
		                    <span className="menu-global menu-bottom" />
                		</div>
                		<Link to='/' className='navbar-brand home-navbar-brand'>
                			THE LAW CLUB
                		</Link>
					</div>
					<div className='collapse navbar-collapse zero-padding zero-margin' id='home-navbar-collapse'>
						<ul className='nav navbar-nav zero-padding zero-margin'>
							<li className='home-navbar-li'>
								<button className='home-navbar-btn home-navbar-btn-left home-navbar-uncollapse-btn'>
									<Link to='/member'
										  style={{textDecoration: 'none', color: 'black', ':hover': {color: '#377037'}}}>
										  Member
									</Link>
								</button>
							</li>
							<li className='home-navbar-li'>
								<button className='home-navbar-btn home-navbar-btn-left home-navbar-uncollapse-btn'>
									<Link to='/attorney'
										  style={{textDecoration: 'none', color: 'black', ':hover': {color: '#377037'}}}>
										  Attorney
									</Link>
								</button>
							</li>
							<div>
								<Link to='/' style={{textDecoration: 'none'}}>
									<li className='home-navbar-li'>
										<button onClick={this.onClick.bind(this)}
												className='home-navbar-btn home-navbar-btn-left home-navbar-btn-bottom-border home-navbar-collapse-top home-navbar-collapse-bottom home-navbar-collapse-btn'
												id="home-collapse-btn-home" 
												data-toggle="collapse" 
												data-target="#home-navbar-collapse">
												Home
										</button>
									</li>
								</Link>
								<li className='home-navbar-li'>
									<button onClick={this.onClick.bind(this)}
											data-toggle="collapse" 
											data-target="#home-navbar-collapse" 
											className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-top home-navbar-collapse-btn'>
											Download the App
									</button>
								</li>
								<li className='home-navbar-li'>
									<button onClick={this.onClick.bind(this)}
											className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-btn' 
											data-toggle="collapse" 
											data-target="#home-navbar-collapse">
										<Link to='/signup' style={{textDecoration: 'none', color: 'black', ':hover': {color: '#377037'}}}>
											Sign Up
										</Link>
									</button>
								</li>
									<li className='home-navbar-li'>
										<button onClick={this.onClick.bind(this)} 
												className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-bottom home-navbar-collapse-btn' 
												data-toggle="collapse" 
												data-target="#home-navbar-collapse">
												<Link to='/login' style={{textDecoration: 'none', color: 'black', ':hover': {color: '#377037'}}}>
												Log In
												</Link>
										</button>
									</li>
								<li className='home-navbar-li'>
									<button onClick={this.onClick.bind(this)} 
											className='home-navbar-btn home-navbar-btn-top-border home-navbar-collapse-top home-navbar-collapse-btn' 
											data-toggle="collapse" 
											data-target="#home-navbar-collapse">
											Help
									</button>
								</li>
							</div>
						</ul>
						<ul className='nav navbar-nav navbar-right zero-padding zero-margin'>
							<li className='home-navbar-li'>
								<button className='home-navbar-btn home-navbar-btn-right home-navbar-btn-top-border home-navbar-uncollapse-btn'>
									HELP
								</button>
							</li>
							<li className='home-navbar-li'>
								<button className='home-navbar-btn home-navbar-btn-right home-navbar-btn-top-border home-navbar-uncollapse-btn'>
									<Link to='/signin' style={{textDecoration: 'none', color: 'black', ':hover': {color: '#377037'}}}>
									SIGN IN
									</Link>
								</button>
							</li>
							<li className='home-navbar-li'>
								<button className='home-navbar-btn-green home-navbar-uncollapse-btn'>
									BECOME A MEMBER
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;