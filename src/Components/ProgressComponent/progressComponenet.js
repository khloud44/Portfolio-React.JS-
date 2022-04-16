import React, { Component } from 'react';

class ProgressCom extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
                <div className='w-100 my-3 py-2 '>
                    <div className=' row w-100 d-flex justify-content-start flex-row'>
                        <div className="col-2 bg-secondary">
                            {this.props.course}
                        </div>
                        <div className="col-10 bg-light px-0">
                            <div style={{'width':this.props.degree * 7.2 , 'backgroundColor':"#ccc"}} className="text-muted">
                                {`${this.props.degree}%`}
                            </div>
                        </div>

                    </div>
                </div>
        );
    }
}

export default ProgressCom;