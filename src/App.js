import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Component Modules
import Home   from './component/layout/Home.js';
import Signup from './component/layout/Signup.js';
import Navbar from './component/containers/Navbar.js';
import BinaryDirectory from './component/layout/BinaryDirectory.js';

function SignupDirectory() {
	return <BinaryDirectory header={"Sign In"} titles={["Attorney","Member"]}
						descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
						buttonNames={["ATTORNEY SIGN IN","MEMBER SIGN IN"]}/>;
}

function AttorneyDirectory() {
	return <BinaryDirectory header={"Attorney"} titles={["Sign Up","Sign In"]}
						descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
						buttonNames={["ATTORNEY SIGN UP","ATTORNEY SIGN IN"]}/>;
}

function MemberDirectory() {
	return <BinaryDirectory header={"Member"} titles={["Sign Up","Sign In"]}
						descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
						buttonNames={["MEMBER SIGN UP","MEMBER SIGN IN"]}/>;
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			navbar: true
		}
	}
	render() {
		return (
			<Router>
				<div style={{padding: 0, margin: 0}}>
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route path='/signin' component={SignupDirectory} />
					<Route path='/attorney' component={AttorneyDirectory} />
					<Route path='/member' component={MemberDirectory} />
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));