import React from 'react';
import './styles/home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="container home-container">
				<div className="mission-statement">
					<h1>Breath in</h1>
					<h2>Let an iLawyer handle it for you</h2>
				</div>
				<div className="home-img"/>
			</div>
		);
	}
}
export default Home;