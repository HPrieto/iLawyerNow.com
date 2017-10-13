import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Modules
import Home   from './component/layout/Home.js';
import Footer from './component/containers/Footer.js';
import Navbar from './component/containers/Navbar.js';

class App extends Component {
	render() {
		return (
			<div style={{padding: 0, margin: 0}}>
				<Home />
				<Footer />
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));