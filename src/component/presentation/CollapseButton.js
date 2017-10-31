import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './presentation.css';

class CollapseButton extends Component {
    render() {
        return (
            <button className='home-navbar-btn home-navbar-btn-right home-navbar-btn-top-border home-navbar-uncollapse-btn'>
                <Link to={this.props.to}
                      style={{textDecoration:'none',color:'black',margin:'0 0 0 0',padding:'0 0 0 0'}}>
                    {this.props.name}
                </Link>
            </button>
        )
    }
}
export default CollapseButton;
