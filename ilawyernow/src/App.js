import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import SignupLawyerFrom from './components/partials/sign_up_lawyer_form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body-container">
          <Navbar></Navbar>
          <Home>
            <SignupLawyerFrom/>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
