import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Modules
import Home from './component/layout/Home.js';

class App extends Component {
	render() {
		return (
			<Home />
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));