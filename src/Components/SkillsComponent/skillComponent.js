import React, { Component } from 'react';

import './skillStyle.css';
import ProgressCom from './../ProgressComponent/progressComponenet'

class Skill extends Component {
    state = {  
        Skills:[
            {id:1, course : "HTML" , degree : 90},
            {id:2, course : "CSS" , degree : 100},
            {id:3, course : "JavaScript" , degree : 80},
            {id:4, course : "React" , degree : 80},
            {id:5, course : "Node.JS" , degree : 80},
            {id:6, course : "Wordpress" , degree : 60},
        ]    
    }

    render() { 
        return (
                <div className="container-flued bg-dark text-light  px-2 py-5 overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Skills</h2>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tempora! Quisquam recusandae accusantium, nulla architecto perferendis optio veritatis laboriosam error, expedita odio facere praesentium dolorum doloremque, deleniti officia porro atque.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tempora! Quisquam recusandae accusantium, nulla architecto perferendis optio veritatis laboriosam error, expedita odio facere praesentium dolorum doloremque, deleniti officia porro atque.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div>
                                    <ul>
                                        <li className="border-bottom py-2 px-5  my-3 fous">MY FOUS</li>
                                        <li>UI/UX Design</li>
                                        <li>Responsive Design</li>
                                        <li>Web Design</li>
                                        <li>Mobile App Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-8">
                                {this.state.Skills.map(skill =>(
                                        <ProgressCom 
                                            key={skill.id}
                                            course={skill.course}
                                            degree={skill.degree}
                                        /> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 
    );
    }
}

export default Skill;