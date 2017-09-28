import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
