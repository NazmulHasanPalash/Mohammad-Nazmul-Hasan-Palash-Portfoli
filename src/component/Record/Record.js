import React from 'react';
import './Record.css';

const Record = () => {

    return (
        <div id='record'>
            <div className=" w-100 mx-auto text-white count-style">
                <div className="row w-100 mx-auto py-3">
                    <div className="col text-center">
                        <h5><i className="fas fa-users"></i></h5>
                        <h5 className="counter">273</h5>
                        <h6>Clients</h6>

                    </div>
                    <div className="col text-center">
                        <h5><i className="fas fa-file"></i></h5>
                        <h5 className="counter">17</h5>
                        <h6>Big Projects</h6>

                    </div>
                    <div className="col text-center">
                        <h5><i className="fas fa-solid fa-briefcase"></i></h5>
                        <h5 className="counter">2</h5>
                        <h6>Worked for company</h6>
                    </div>
                    <div className="col text-center">
                        <h5><i className="fas fa-solid fa-laptop-code"></i></h5>
                        <h5 className="counter">2</h5>
                        <h6>Years Job Experience </h6>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Record;