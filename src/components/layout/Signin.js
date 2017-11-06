import React, { Component } from 'react'
import './layout.css'

/* Import Components */
import Footer from '../presentation/Footer.js';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    onEmailChange(event) {
        console.log(event.target.id + " : " + event.target.value)
        this.setState({email:event.target.value})
    }
    onClick(event) {
        console.log('Event: ' + this.state.email)
    }
    render() {
        console.log(this.props);
        return (
            <div className='main-container signin-container'>
                <div className='signin-form'>
                    <h3>Sign In</h3>
                    <input className='form-control'
                           id='email'
                           placeholder='Email or Mobile Number'
                           onChange={this.onEmailChange.bind(this)}/>
                    <button className='btn'
                            onClick={this.onClick.bind(this)}>
                        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                            NEXT
                        </div>
                        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <img src={require('../img/right-arrow.png')}
                                 style={{width:20,height:20}}/>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
export default Signin;
