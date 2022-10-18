import React from 'react';

const BlogSlideThree = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/communication.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash Communication skills blog" />
                        <div className="card-body">
                            <h5 className="card-title">Communication Skills</h5>

                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1vVTL1ekk5cfu5x0rXdla6eLaC_1ko5iv/edit?usp=sharing&ouid=105733454173653976067&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/leadership.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash leadership skills and human relations blog" />
                        <div className="card-body">
                            <h6 className="card-title">LEADERSHIP SKILLS & HUMAN RELATIONS</h6>
                            <h6 className="card-title">(Johari’s Model)</h6>

                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1cjxOT7etx8hjYpIqZVijDR9XeV8MB8ei-PoRtoQsd44/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card im-style hover-style">
                        <img src="image/Artificial.jpg" className="card-img-top h-75" alt="Nazmul Hasan Palash depth of artificial intelligence blog" />
                        <div className="card-body">
                            <h6 className="card-title">Depth of Artificial Intelligence</h6>

                            <button className='btn btn-primary a-style'> <a className='' href="https://docs.google.com/document/d/1KpLc4nEQS8eWDnopySMmvbsVjsLmg65SMe96woZox50/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Article</a></button>
                        </div>
                    </div>
                </div>
                <div className="col">

                </div>

            </div>

        </div>
    );
};

export default BlogSlideThree;