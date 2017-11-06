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
                    <button className='btn'>
                        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>NEXT</div>
                        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <img src={require('../img/right-arrow.png')} style={{width:20,height:20}}/>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
export default Signin;
