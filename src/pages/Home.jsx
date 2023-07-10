import React from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


function Home() {
    return (
        <>
            <div className="headingtext">
                <div className="headingedits">
                    <TypeAnimation  sequence={["Hello! I'm Arya Ranadive and I love creating things."]} wrapper="span" speed={35} style={{ fontWeight: '300', fontSize: '2.1em' }}/>
                    <p className='lowertext'> I'm so glad you're here! You can read more about some of the <Link to="/projects"> projects </Link> I've done in the past or
                        browse through some of the <Link to="/photography"> photos </Link> I've clicked. </p>

                    <p className='lowertext'> I've recently graduated from UC Davis and will soon start at Deloitte as a Solutions Engineering Analyst in Government and Public Services.</p>

                    <p className='lowertext'> Feel free to explore my portfolio and <a className="emaillink" href="mailto:aryaaranadive@gmail.com">get in touch </a> if you have any questions or would like to discuss a potential collaboration.
                        I look forward to connecting with you!</p>
                </div>
            </div>
        
        </>
    );
}

export default Home;

