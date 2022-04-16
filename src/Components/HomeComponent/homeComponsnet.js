import React, { Component } from 'react';
import "./homeStyle.css"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-flued home vh-100">
                <div className="row w-100 h-100">
                    <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-light py-2">Khloud Elsaid </h1> 
                        <h2 className="text-light py-2">Web Developer & Designer </h2>
                        <button className="btn border text-light m-3 py-2">Contact Me</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;