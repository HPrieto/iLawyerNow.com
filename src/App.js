import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// Component Modules
import Home   from './component/layout/Home.js';
import Signup from './component/layout/Signup.js';
import Navbar from './component/containers/Navbar.js';
import BinaryDirectory from './component/layout/BinaryDirectory.js';

/* Binary Directories */
function SigninDirectory() {
	return <BinaryDirectory header={"Sign In"}
							titles={["Attorney","Member"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY SIGN IN","MEMBER SIGN IN"]}
							to={["/attorney/signin","/member/signin"]}/>;
}

function LoginDirectory() {
	return <BinaryDirectory header={"Log In"}
							titles={["Attorney","Member"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY LOG IN","MEMBER LOG IN"]}
							to={["/attorney/signin","/member/signin"]}/>;
}

function SignupDirectory() {
	return <BinaryDirectory header={"Sign Up"}
							titles={["Attorney","Member"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY SIGN UP","MEMBER SIGN UP"]}
							to={["/attorney/signup","/member/signup"]}/>;
}

function AttorneyDirectory() {
	return <BinaryDirectory header={"Attorney"}
							titles={["Sign Up","Sign In"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY SIGN UP","ATTORNEY SIGN IN"]}
							to={["/attorney/signup","/attorney/signin"]}/>;
}

function MemberDirectory() {
	return <BinaryDirectory header={"Member"}
							titles={["Sign Up","Sign In"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["MEMBER SIGN UP","MEMBER SIGN IN"]}
							to={["/member/signup","/member/signin"]}/>;
}

/* Attorney and Member Signup Layouts */

/* Attorney/Member Signup Pages */
function AttorneySignup() {
	return <Signup attorney={true}
				   header={"Become a mobile Attorney"}
				   subheader={"Earn money on your schedule"}
				   images={[require('./component/img/moneytree.png'),require('./component/img/watch.png'),require('./component/img/smartphone.png')]}
				   imageTitle={["Make great money","Set your own schedule","Signing up is easy"]}
				   imageDesc={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
				   			   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
				   			   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."]}/>;
}

function MemberSignup() {
	return <Signup attorney={false}
				   header={"Become a member"}
				   subheader={"Get help when needed"}
				   images={[require('./component/img/teamwork.png'),require('./component/img/lecturer.png'),require('./component/img/hammer_icon.png')]}
				   imageTitle={["Make great money","Set your own schedule","Signing up is easy"]}
				   imageDesc={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
				   			   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
				   			   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."]}/>;
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			navbar: true
		}
	}
	componentWillMount() {
	}
	render() {
		return (
			<Router>
				<div style={{padding: 0, margin: 0}}>
					<Navbar />
					<Switch>
						<Route exact path='/'				 component={Home}/>
						<Route path='/home'					 component={Home}/>
						<Route path='/signin'				 component={SigninDirectory}/>
						<Route path='/signup'				 component={SignupDirectory}/>
						<Route exact path='/attorney/signup' component={AttorneySignup}/>
						<Route exact path='/attorney'		 component={AttorneySignup}/>
						<Route exact path='/member'			 component={MemberSignup}/>
						<Route exact path='/member/signup' component={MemberSignup}/>
						<Route path='/login'				 component={LoginDirectory}/>
						<Route component={Home}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
