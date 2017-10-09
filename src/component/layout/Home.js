import React, { Component } from 'react';
import styles from './styles.js';

class Home extends Component {
	render() {
		// Component Style Objects
		const Home = styles.Home
		const homeContainer = Home.homeContainer
		const missionStatement = Home.missionStatement
		const missionStatementH1 = Home.missionStatementH1
		const missionStatementH2 = Home.missionStatementH2
		const img = Home.img
		return (
			<div className="container" style={homeContainer}>
				<div style={missionStatement}>
					<h1 style={missionStatementH1}>Breath in</h1>
					<h2 style={missionStatementH2}>Let an iLawyer handle it for you</h2>
				</div>
				<div style={img}/>
			</div>
		)
	}
}
export default Home;