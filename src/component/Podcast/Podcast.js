import React from 'react';
import './Podcast.css';

const Podcast = () => {
    return (
        <div id='podcast'>
            <div className='w-100 mx-auto podcast-style '>
                <div>
                    <h1> <span className='po'>Po</span><span className='dc'>dc</span><span className='at'>a</span><span className='st'>st</span></h1>
                    <div className="card text-bg-dark w-50 mx-auto my-3 v-style shadow-lg">
                        <iframe className='mx-auto w-100 v-style pd-style container-fluid' height="500" src="https://www.youtube.com/embed/npPYsM8BkzE" title="podcast first part- With Jhankar Mahbub (CEO of Programming Hero ltd)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="card-video-overlay">
                            <h6 className="card-title">Podcast with Jhankar Mahbub</h6>
                            <p className="card-text">CEO of programming hero ltd and Bangladesh number one web developer</p>
                            <p className="card-text"><small>First part</small></p>
                        </div>
                    </div>
                    <div className="card text-bg-dark w-50 mx-auto  v-style shadow-lg">
                        <iframe className='w-100 mx-auto v-style pd-style container-fluid' height="500" src="https://www.youtube.com/embed/KEMrGacK57Y" title="podcast part two-With Jhanakar Mahbub (CEO of Programming Hero ltd)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="card-video-overlay">
                            <h6 className="card-title">Podcast with Jhankar Mahbub</h6>
                            <p className="card-text">CEO of programming hero ltd and Bangladesh number one web developer</p>
                            <p className="card-text"><small>First two</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Podcast;