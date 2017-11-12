import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// Component Modules
import Home   from './components/layout/Home.js';
import Signin from './components/layout/Signin.js';
import Signup from './components/layout/Signup.js';
import Navbar from './components/containers/Navbar.js';
import BinaryDirectory from './components/layout/BinaryDirectory.js';

/* Binary Directories */
function SigninDirectory() {
	return <BinaryDirectory header={"Sign In"}
							titles={["Attorney","Member"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY SIGN IN","MEMBER SIGN IN"]}
							to={["/signin/attorney","/signin/member"]}/>;
}

function LoginDirectory() {
	return <BinaryDirectory header={"Log In"}
							titles={["Attorney","Member"]}
							descriptions={["Find everything you need to track your success on the road.","Manage your payment options, review trip history, and more."]}
							buttonNames={["ATTORNEY LOG IN","MEMBER LOG IN"]}
							to={["/signin/attorney","/signin/member"]}/>;
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
				   header={"Go Mobile"}
				   subheader={"Earn money on your schedule"}
				   images={[require('./components/img/moneytree.png'),require('./components/img/watch.png'),require('./components/img/smartphone.png')]}
				   imageTitle={["Make great money","Set your own schedule","Signing up is easy"]}
				   imageDesc={["Reach your top potential and compete with the top firms in your area without overspending on unnecessary advertisement platforms.",
				   			   "Work day or night, on your own time by simply logging on when you are ready to work.'Reach millions'.",
				   			   "Simply register, pay our one time membership fee and create your own personal network."]}/>;
}

function MemberSignup() {
	return <Signup attorney={false}
				   header={"Become a member"}
				   subheader={"Get help when you need it most."} // lecturer, police traffic stop, factime icon
				   images={[require('./components/img/lecturer.png'),require('./components/img/lecturer.png'),require('./components/img/hammer_icon.png')]}
				   imageTitle={["Connect to an attorney","When you need it most","Create an account"]}
				   imageDesc={["There is no advertisement company website, application, or direct connection to an attorney as reliable as iLawyerNow.com.",
				   			   "If you need an attorney at a traffic stop, sudden legal confrontation, or for professional legal advice.",
				   			   "Simply and easily create an account in seconds."]}/>;
}

/* Attorney/Member Signin */
function MemberSignin() {
	return <Signin />
}

function AttorneySignin() {
	return <Signin />
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
						<Route exact path='/home'			 component={Home}/>
						<Route exact path='/signin'			 component={SigninDirectory}/>
						<Route exact path='/signin/member' 	 component={MemberSignin}/>
						<Route exact path='/signin/attorney' component={AttorneySignin}/>
						<Route exact path='/signup'			 component={SignupDirectory}/>
						<Route exact path='/attorney/signup' component={AttorneySignup}/>
						<Route exact path='/attorney'		 component={AttorneySignup}/>
						<Route exact path='/member'			 component={MemberSignup}/>
						<Route exact path='/member/signup'   component={MemberSignup}/>
						<Route path='/login'				 component={LoginDirectory}/>
						<Route component={Home}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
