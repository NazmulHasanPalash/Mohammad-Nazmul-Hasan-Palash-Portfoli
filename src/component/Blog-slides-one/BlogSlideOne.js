import React from 'react';
import './BlogSlideOne.css'

const BlogSlideOne = () => {

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash Depth of database system blog" />
                        <div className="card-body">
                            <h5 className="card-title">Depth of database system</h5>
                            <p className="card-text ">Writer: Nazmul Hasan Palash</p>


                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1iQymI7QYi9sjxPXQOmX6njhLXBpvTq5PbdTIUFr3u6c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/hml.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash structure of html blog" />
                        <div className="card-body">
                            <h5 className="card-title">Structure of HTML5</h5>
                            <p className="card-text ">Writer: Nazmul Hasan Palash</p>



                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1uytyJ0YBF7llpkt_fjZjxPzJwAWfMMILm52vUAWOUDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/css.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash CSS flag blog" />
                        <div className="card-body">
                            <h5 className="card-title">CSS Flag</h5>
                            <p className="card-text ">Writer: Nazmul Hasan Palash</p>


                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1N9r9wZrZbE0ULMhbWQt6tNqLrmsorSj8nytqskGL57s/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>

                    </div>
                </div>
                <div className="col">

                </div>

            </div>
        </div>
    );
};

export default BlogSlideOne;