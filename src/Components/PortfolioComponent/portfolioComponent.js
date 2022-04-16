import React, { Component } from 'react';
import SimblePort from "../SimblePortComponent/simblePortComponent"
class Portfolio extends Component {
    state = { 
        portfolio:[
            { id:1, value: "WEB DESIGN"},
            { id:2, value:"MOBILE DESGIN"},
            { id:3, value:"LOGO DESIGN"},
            { id:4, value:"WEB APPLICATION DEVELOPMENT"},
            { id:5, value:"MOBILE APPLICATION DEVELOPMENT"},
            { id:6, value:"PWA DEVELOPMENT"}
        ]
    } 

    render() { 
        return (
            <div className="my-5 py-3">
            <h2 className="px-5 my-3 text-start">Portfolio</h2>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    {this.state.portfolio.map(item=>(
                        <SimblePort
                            key={item.id}
                            value={item.value}
                            id={item.id}
                        /> 
                        ))
                    }    
                </div> 
            </div>
            </div>
        )
    }
}
export default Portfolio;