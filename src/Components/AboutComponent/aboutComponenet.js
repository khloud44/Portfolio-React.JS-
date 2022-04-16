import React, { Component } from 'react';

import "./aboutStyle.css"

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-flued py-5">
                <div className="row m-5">
                    <div className="col-5  d-flex justify-content-center align-items-center about">
                        <h2>About Me</h2>
                    </div>
                    <div className="col-6 ">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptatum suscipit quos ullam quas consequatur architecto, dolore aspernatur accusamus. Fugiat quaerat reprehenderit ipsum deserunt dignissimos vero. Modi ipsa maiores doloribus!
                        </p>
                        <a className="btn btn-secondary my-2 my-md-0 ms-md-3" href="public/KhloudCV.pdf " download>Download Resume</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;