import React from 'react';
import './Certificate.css';

const Certificate = () => {
    return (
        <div id='achievement'>
            <div className='w-100 mx-auto pb-style p-3'> <h1 className='ac-style '><span className='ac-f-s'>Ach</span><span className='ac-s-s'>ieve</span><span className='ac-t-s'>men</span><span className='ac-fr-s'>ts</span> </h1>
                <div className="row row-cols-1 row-cols-md-2 g-4 ">
                    <div className="col">
                        <div className="card m-3 shadow-lg border-style hover-style ">
                            <img src="image/Main certificate.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <button className='btn btn-warning p-3 mx-auto btn-style'><a href="https://drive.google.com/file/d/1HgxpzIhiLlphCV4sbSSFqUKxgJQyUCAS/view?usp=sharing" target="_blank" rel="noopener noreferrer">Downland Document</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card m-3 shadow-lg border-style hover-style">
                            <div className='poster-style'>
                                <img src="image/Poster.png" className="card-img-top h-50" alt="..." />

                            </div>
                            <div className="card-body">
                                <button className='btn btn-warning p-3 mx-auto btn-style'><a href="https://drive.google.com/file/d/15AXD0FJ0KULpH8Sr6VwVZHrNj09mGhtC/view?usp=sharing" target="_blank" rel="noopener noreferrer">Downland Document</a></button>

                            </div>
                        </div>
                    </div>

                </div></div>


        </div>
    );
};

export default Certificate;