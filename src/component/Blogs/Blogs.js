import React from 'react';
import './Blogs.css'
import BlogSlideOne from '../Blog-slides-one/BlogSlideOne';
import BlogSlideThree from '../BlogSlideTwo/BlogSlideThree/BlogSlideThree';
import BlogSlideTwo from '../BlogSlideTwo/BlogSlideTwo';

const Blogs = () => {
    return (
        <div>
            <div className='w-100 cb-style py-3'>
                <h1 className="text-center text-white logo-style ">Personal<span className="span-style"> Blogs</span></h1>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">

                        <div className="carousel-item active my-3">
                            <BlogSlideOne></BlogSlideOne>

                        </div>
                        <div className="carousel-item my-3">
                            <BlogSlideTwo></BlogSlideTwo>


                        </div>
                        <div className="carousel-item  my-3">
                            <BlogSlideThree></BlogSlideThree>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon text-primary" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Blogs;