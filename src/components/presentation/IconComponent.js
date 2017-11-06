import React, { Component } from 'react';
import './presentation.css';

class IconComponent extends Component {
    render() {
        return (
            <div className="zero-padding zero-margin col-xs-12 col-sm-12 col-md-4 col-lg-4 product-section-colrow"
                 style={{margin: 0,padding: 0}}>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                    <img src={this.props.imageURL}/>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}
export default IconComponent;
