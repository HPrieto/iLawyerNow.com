import React from 'react';
import './containers.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar navbar-fixed-top ">
				<div className="container">
			        <div className="navbar-header">
			          	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
			          	</button>
			          	<a className="navbar-brand" href="/">ILAWYER</a>
			          	<button className="navbtn-left navbtn btn btn-default">Defendant</button>
			            <button className="navbtn-left navbtn btn btn-default">Lawyer</button>
			        </div>
			        <div id="navbar" className="navbar-collapse collapse">
			        	<div className="navbar-right">
			        		<button className="navbtn-right navbtn btn btn-default">HELP</button>
			            	<button className="navbtn-right navbtn btn btn-default">SIGN IN</button>
			            	<button type="submit" className="btn btn-lawyer" id="">BECOME AN ILAWYER</button>
			        	</div>
			        </div>
	      		</div>
			</div>
		);
	}
}
export default Navbar;