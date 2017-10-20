import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Modules
import Home   from './component/layout/Home.js';
import Navbar from './component/containers/Navbar.js';
import Footer from './component/presentation/Footer.js';
import BinaryDirectory from './component/layout/BinaryDirectory.js';

class App extends Component {
	render() {
		return (
			<div style={{padding: 0, margin: 0}}>
				<Navbar />
				<BinaryDirectory header={"Sign In"} titles={["Attorney","Member"]}
						descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
						buttonNames={["ATTORNEY SIGN IN","MEMBER SIGN IN"]}/>
				<Footer buttonNames={['LAWYER SIGN UP', 'MEMBER SIGN UP']} buttonIds={['LawyerSignup', 'MemberSignup']} />
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));