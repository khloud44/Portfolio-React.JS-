import React, { Component } from 'react';

class SimblePort extends Component {
    constructor(props) {
        super(props);
    }
    getColor(num){
        return num % 2? "dark col-3 p-5 m-3 border shadow" : "info col-3 p-5 m-3 border shadow"
    }
    render() { 
        return ( 
            <div className={this.getColor(this.props.id)}  style={{height:'150px'}}>
                <p className="border-bottom pb-3">{this.props.value}</p>
            </div>
        );
    }
}

export default SimblePort;