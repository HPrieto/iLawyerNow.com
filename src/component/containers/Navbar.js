import React from 'react';
import './containers.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className='navbar navbar-fixed-top home-navbar'>
				<div className='container-fluid home-navbar-container'>
					<div className='navbar-header'>
						<a className='navbar-brand home-navbar-brand'>iLAWYER</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;