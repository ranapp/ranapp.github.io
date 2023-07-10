import React from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div className="headingtext">
                <div className="headingedits">
                <h1>Hello! I'm <span className='highlight'>Arya Ranadive </span> and I love creating things.</h1>
                    <p className='lowertext'> I'm so glad you're here! You can read more about some of the <Link to="/projects"> projects </Link> I've done in the past or
                        browse through some of the <Link to="/photography"> photos </Link> I've clicked. </p>

                    <p className='lowertext'> I've recently graduated from UC Davis and currently waiting to start my new grad position in software.</p>

                    <p className='lowertext'> Feel free to explore my portfolio and <a className="emaillink" href="mailto:aryaaranadive@gmail.com">get in touch </a> if you have any questions or would like to discuss a potential collaboration.
                        I look forward to connecting with you!</p>
                        </div>
            </div>
        
        </>
    );
}

export default Home;

