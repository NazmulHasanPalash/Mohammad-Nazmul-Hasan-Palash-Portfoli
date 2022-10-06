import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark  w-100 mx-auto   header-style">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 logo-style" href="#home">Portfo<span className="span-style">lio.</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle active" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#education">Education</a></li>
                                    <li><a className="dropdown-item" href="#skill">Skills</a></li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#blog">Blogs</a></li>
                                    <li><a className="dropdown-item" href="#record">Experience</a></li>


                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#achievement">Achievement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#podcast">Podcast</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact">Contact</a>
                            </li>

                        </ul>

                    </div>


                </div>
            </nav>


        </div>
    );
};

export default Header;