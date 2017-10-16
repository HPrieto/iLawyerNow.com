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
                		<a className='navbar-brand home-navbar-brand'>iLAWYER</a>
					</div>
					<div className='collapse navbar-collapse' id='home-navbar-collapse'>
						<ul className='nav navbar-nav'>
							<li><a>Member</a></li>
							<li><a>Attorney</a></li>
						</ul>
						<ul className='nav navbar-nav navbar-right'>
							<li><a>HELP</a></li>
							<li><a>SIGN IN</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;