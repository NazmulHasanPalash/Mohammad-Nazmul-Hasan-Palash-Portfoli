import React from 'react';

const BlogSlideTwo = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/js.jpg" className="card-img-top h-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Javascript Flag</h5>

                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/16M69dexOS3MHztI-qbqof-6RskDrp2Hc5nJ6_frDPFY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/react.jpg" className="card-img-top h-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">React JS concept</h5>

                            <button className='btn btn-primary a-style'> <a className='' href=":https://docs.google.com/document/d/16M69dexOS3MHztI-qbqof-6RskDrp2Hc5nJ6_frDPFY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/mongo.jpg" className="card-img-top h-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MongoDB Atlas</h5>

                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/11zKAMDrPmNRys03XuwhUtiSBp8BoeT0bGqN-1mNk36w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>

                </div>
                <div className="col">

                </div>

            </div>

        </div>
    );
};

export default BlogSlideTwo;