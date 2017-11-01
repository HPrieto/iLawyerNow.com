import React, { Component } from 'react'
import './layout.css'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className='signin-container'>
                <div className='signin-form'>
                    <h3>Sign In</h3>
                </div>
            </div>
        )
    }
}
export default Signin;
