import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className='background-style'>
            <div className='pb-3'>
                <h1 className='mb-3 '><span className='br-style text-white'>Pro</span><span className='heading-style b-style'>jects</span></h1>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 w-100 mx-auto mb-3">
                    <div className="col ">
                        <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded mx-5 container-fluid mx-auto hover-style">
                            <img src="image/project-01.png" className="card-img-top" alt="..." />
                            <div className="card-body c-style">
                                <h5 className="card-title text-warning">Bikers world</h5>
                                <p className="card-text t-style">Website prototype for bike automobile and showrooms. Ful-stack website with google firebase authorization protection system and Mongodb database system. For the check admin system use (Email:admin@admin.com Password:123456)  </p>
                                <button className='btn btn-danger'><a className='link-style' href="http://bike-world-e1c47.web.app/" target='_blank' rel="noreferrer">Website</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded mx-5 container-fluid mx-auto hover-style">
                            <img src="image/project-02.png" className="card-img-top" alt="..." />
                            <div className="card-body c-style">
                                <h5 className="card-title text-warning">Force Security</h5>
                                <p className="card-text t-style">Website prototype for cyber security corporation. Ful-stack website with google firebase authorization protection system and Mongodb database system.</p>
                                <button className='btn btn-danger'><a className='link-style' href="https://cyber-security-6ebc1.web.app/" target='_blank' rel="noreferrer">Website</a></button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded mx-5 container-fluid mx-auto hover-style">
                            <img src="image/project-03.png" className="card-img-top" alt="..." />
                            <div className="card-body c-style">
                                <h5 className="card-title text-warning">Medical center</h5>
                                <p className="card-text t-style">Website prototype for health care or hospital. Ful-stack website with google firebase authorization protection system and Mongodb database system.</p>
                                <button className='btn btn-danger'><a className='link-style' href="https://health-care-e9b0d.web.app/" target='_blank' rel="noreferrer">Website</a></button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Projects;