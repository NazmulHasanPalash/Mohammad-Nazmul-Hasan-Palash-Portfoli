import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Typed from 'react-typed';
import './Banner.css'
const Banner = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id='home'>
            <div className='h-50'>
                <div className="w-100 rox">
                    <Particles className='particle ani-style'
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{

                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.5,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1000,
                                    },
                                    value: 130,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />

                    <div className="container  container-fluid w-100 " id="particles-js" >


                        <div className="row align-items-center ">

                            <div className="col  container fluid ">
                                <div className='m-5  text-style'>
                                    <h6 className='intro '>Hello, my name is</h6>
                                    <h2 className='name '> Mohammad Nazmul Hasan Palash</h2>
                                    <h3 className='type'>
                                        And, I am <Typed strings={['Web Developer', 'Freelancer', 'Content Writer', 'Blogger']}
                                            loop={5}

                                            cursorStyle='|'
                                            typeSpeed={50}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            className='span-style'>

                                        </Typed>
                                    </h3>
                                    <button className="btn btn-danger btn-style me-3 my-3 contact-style"><a href="#contact">Contact
                                        me</a></button>
                                    <button className="btn btn-warning btn-style me-3 resume-style"><a target={"_blank"}
                                        href="https://drive.google.com/file/d/1adjPNKxEqN4Mss3A3dKrubr-Qa70Px3U/view?usp=sharing" rel="noreferrer">
                                        Download Resume</a>
                                    </button>

                                </div>

                            </div>
                            <div className="col">

                                <div className=" mx-auto w-100 profile align-items-center">
                                    <img src="image/profile.png" className="card-img-top img-fluid  w-75" alt="..." />

                                </div>

                                <div className='ms-5'>
                                    <a className="text-white font-style f-style" target="blank" href="https://www.facebook.com/profile.php?id=100014847361984"><i className="fab fa-facebook-square m-3"></i></a>
                                    <a className="text-white  font-style g-style" target="blank" href="https://github.com/NazmulHasanPalash"><i className="fab fa-github"></i></a>
                                    <a className="text-white font-style i-style" target="blank" href="https://www.instagram.com/nazmul_hasan_polash/"><i className="fab fa-instagram m-3"></i></a>
                                    <a className="text-white font-style l-style" target="blank" href="https://www.linkedin.com/in/mohammad-nazmul-hasan-palash-b74292194"><i className="fab fa-linkedin"></i></a>

                                </div>



                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Banner;