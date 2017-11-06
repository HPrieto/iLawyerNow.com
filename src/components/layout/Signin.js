import React, { Component } from 'react'
import './layout.css'

/* Import Components */
import Footer from '../presentation/Footer.js';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    onInputChange(event) {
        console.log(event.target.value)
    }
    render() {
        console.log(this.props);
        return (
            <div className='main-container signin-container'>
                <div className='signin-form'>
                    <h3>Sign In</h3>
                    <input className='form-control'
                           placeholder='Email or Mobile Number'
                           onChange={this.onInputChange.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default Signin;
