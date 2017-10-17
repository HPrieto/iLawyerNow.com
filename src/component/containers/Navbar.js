import React from 'react';
import './containers.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className='navbar home-navbar'>
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
						<ul className='nav navbar-nav zero-padding'>
							<li><button className='home-navbar-btn home-navbar-btn-left'>Member</button></li>
							<li><button className='home-navbar-btn home-navbar-btn-left'>Attorney</button></li>
						</ul>
						<ul className='nav navbar-nav navbar-right zero-padding'>
							<li><button className='home-navbar-btn home-navbar-btn-right'>HELP</button></li>
							<li><button className='home-navbar-btn-green'>BECOME A MEMBER</button></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;