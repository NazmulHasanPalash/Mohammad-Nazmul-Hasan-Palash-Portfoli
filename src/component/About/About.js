import React from 'react';
import './About.css';
const About = () => {

    return (
        <div id='about'>
            <div className="card  w-100 mx-auto about-style container-fluid  p-3">
                <h1 className="text-center text-white logo-style mt-3 ">About<span className="span-style"> Myself</span></h1>

                <div className="row g-0 d-flex align-items-center w-75 rounded-3  mx-auto bg-dark">
                    <div className="col-md-6   rounded-circle">
                        <img src="image/polash.png" className="img-fluid rounded-start mx-auto " alt="Nazmul Hasan palash second full view profile" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-white">
                            <div className="w-100 mx-auto">
                                <p className='t-style'> Hello, I am Nazmul Hasan Palash .Workaholic web developer with a knack for delivering attractive
                                    solutions in the shortest period of time. For a local charity, I created an
                                    e-commerce website, a travel agency website, a hospital website, a
                                    customer web portal, a documentary launch website, and a contributions
                                    webapp. Software architecture and cloud computing are two areas in
                                    which I am really interested. Web developer meetings and hackathons are
                                    something I go to on a regular basis.</p>
                                <button className="btn  btn-warning btn-style mx-auto resume-style"><a
                                    href="https://https://drive.google.com/file/d/1Wotaz33FxMrRQVMQcTTPOlZTwn0K18jV/view?usp=sharing">
                                    Download CV</a></button>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="bg-dark text-white w-75 mx-auto" id='skill'>
                    <h3 className="logo-style skill-style">Skills</h3>
                    <h5 className="text-white">Web Development</h5>
                    <div className="progress skill-bar w-50 mx-auto">
                        <div className="progress-bar skill-per web bg-danger" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">89%</div>
                    </div>
                    <h5 className="text-white">Video Editor</h5>
                    <div className="progress skill-bar w-50 mx-auto">
                        <div className="progress-bar skill-per video bg-warning " role="progressbar" style={{ width: "75%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h5 className="text-white">Graphics Designer</h5>
                    <div className="progress skill-bar w-50 mx-auto">
                        <div className="progress-bar skill-per graphics bg-success " role="progressbar" style={{ width: "65%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                    <h5 className="text-white">Event Management</h5>
                    <div className="progress skill-bar w-50 mx-auto">
                        <div className="progress-bar skill-per event bg-primary " role="progressbar" style={{ width: "92%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">92%</div>
                    </div>
                    <h5 className="text-white">Content write</h5>
                    <div className="progress skill-bar w-50 mx-auto">
                        <div className="progress-bar bar-style skill-per  bg-purple " role="progressbar" style={{ width: "73%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">73%</div>
                    </div>



                </div>
                <div className="bg-dark text-white w-75 mx-auto " id='education'>
                    <h3 className="logo-style skill-style my-5"><i className="fas fa-user-graduate"></i> Eduction</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-primary mb-5">Relevant Courses </h4>
                                <div className="my-3"><h5 className="m-2">Data Structure</h5>
                                    <h5 className="mx-auto my-3">Database Management Systems</h5>
                                    <h5 className="mx-auto my-3">Responsive Design</h5>
                                    <h5 className="mx-auto my-3">OOP Web development</h5>
                                    <h5 className="mx-auto my-3">Web design (Programming Hero-2021)</h5>
                                    <h5 className="mx-auto my-3">Digital Marketing (Khalid Farhan-2021)</h5></div>
                            </div>
                            <div className="col">
                                <h4 className="text-primary">Institute</h4>
                                <div className="my-3">
                                    <h3 className="border-bottom-2 border-white">School</h3>
                                    <h5>Bangladesh Navy School and College</h5>
                                    <p><i className="fas fa-map-marker-alt"></i> Chittagong, Bangladesh</p>
                                </div>
                                <div className="mb-5">
                                    <h3 className="border-bottom-2 border-white">College</h3>
                                    <h5>Cambrian College</h5>
                                    <p><i className="fas fa-map-marker-alt"></i> Chittagong, Bangladesh</p>
                                </div>
                                <div className="mb-5">
                                    <h3 className="border-bottom-2 border-white">Bachelor In Information and Technology (IT)</h3>
                                    <h5>Segi University</h5>
                                    <p><i className="fas fa-map-marker-alt"></i> Petaling jaya, Malaysia</p>
                                </div>

                            </div>
                        </div>

                    </div>





                </div>



            </div>

        </div>
    );
};

export default About;