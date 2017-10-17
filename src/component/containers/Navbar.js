import React from 'react';
import './containers.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className='navbar navbar-fixed-top home-navbar'>
				<div className='container-fluid home-navbar-container'>
					<div className='navbar-header'>
						<div className="navbar-toggle menu" data-toggle="collapse" data-target="#home-navbar-collapse" id="nav-icon4">
		                    <span className="menu-global menu-top"    />
		                    <span className="menu-global menu-middle" />
		                    <span className="menu-global menu-bottom" />
                		</div>
                		<a className='navbar-brand home-navbar-brand'>THE LAW CLUB</a>
					</div>
					<div className='collapse navbar-collapse zero-padding zero-margin' id='home-navbar-collapse'>
						<ul className='nav navbar-nav zero-padding zero-margin'>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-btn-bottom-border home-navbar-collapse-top home-navbar-collapse-bottom home-navbar-collapse-btn'>Home</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-top home-navbar-collapse-btn'>Download the App</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-uncollapse-btn'>Member</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-uncollapse-btn'>Attorney</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-btn'>Sign Up</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-left home-navbar-collapse-bottom home-navbar-collapse-btn'>Log In</button></li>
						</ul>
						<ul className='nav navbar-nav navbar-right zero-padding zero-margin'>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-right home-navbar-btn-top-border home-navbar-collapse-top home-navbar-uncollapse-btn'>HELP</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn home-navbar-btn-right home-navbar-btn-top-border home-navbar-collapse-top home-navbar-collapse-btn'>Help</button></li>
							<li className='home-navbar-li'><button className='home-navbar-btn-green home-navbar-uncollapse-btn'>BECOME A MEMBER</button></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;