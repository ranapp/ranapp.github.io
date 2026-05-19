import React, { useState } from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


function Home() {
    const [showName, setShowName] = useState(false);

    return (
        <>
            <div className="headingtext">
                <div className="headingedits site-container">
                    <span className="home-intro">
                        <TypeAnimation
                            sequence={[
                                "Hello! I'm ",
                                () => setShowName(true),
                            ]}
                            wrapper="span"
                            speed={35}
                            cursor={false}
                        />
                        {showName && (
                            <>
                                <span className="bold-text">Arya Ranadive</span>
                                <TypeAnimation
                                    sequence={[" and I love creating things."]}
                                    wrapper="span"
                                    speed={35}
                                />
                            </>
                        )}
                    </span>
                    <p className='lowertext'> I'm so glad you're here! You can read more about some of the <Link to="/projects"> projects </Link> I've done in the past or
                        browse through some of the <Link to="/photography"> photos </Link> I've clicked. </p>
                    <p className='lowertext3'> Feel free to explore my portfolio and <a className="emaillink" href="mailto:aryaaranadive@gmail.com">get in touch </a> if you have any questions or would like to discuss a potential collaboration. I'm always open to new opportunities.
                        I look forward to connecting with you!</p>
                </div>
            </div>
        
        </>
    );
}

export default Home;

