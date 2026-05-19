import React from 'react';
import profile from '/Users/aryaranadive/Projects/ranapp.github.io/src/project_images/Untitled-1.jpg';
import "../styles/aboutme.css";

function AboutMe() {
    return (
        <div className="section site-container site-container--wide">
            <img src={profile} alt =""/>
            <div className='content'>
            <h1 id="heading">A little bit about me...</h1>
            <p>I graduated from UC Davis with a Bachelor's in Computer Science back in 2023.
                Today, I'm a consultant at Deloitte within the Government and Public Services sector. I work hands-on with state and 
                local governments to help modernize their IT infrastructure and systems.</p>
            <p>My past experiences include: <span id="italics">automation at Travelers Insurance, frontend development with #include, and software development and statistical analysis at the UC Davis Center for Mind and Brain. </span> </p>
            <p>You can read more about it <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here.</a></p>
            <p>Besides coding and photography, some things that excite me are:</p>
            <ul>
                <li>Finding a cute coffee shop </li>
                <li>Vintage book and magazine covers</li>
                <li>Soft-serve ice cream</li>
                <li>Alternative r&b, dream pop, indie, bollywood lofi</li>
                <li>Exploring a new cities </li>
                <li>Book recommendations ( <a href="https://www.goodreads.com/user/show/165394356-arya">current reads</a> )</li>
                <li>Afternoons sketching at the MET</li>
                <li>Writing (sometimes on Substack) </li>
                <li>Good lighting</li>
            </ul>
            <p>But most of all, hearing from you!</p>
            <p>For inquiries, please contact me at <a href="mailto:aryaaranadive@gmail.com">aryaaranadive@gmail.com</a>. For photography inquiries, you can reach me through my email or also message me on my instagram: <a href="https://instagram.com/picturesbyarya?igshid=OGQ5ZDc2ODk2ZA==">@picturesbyarya</a>.</p>
            </div>
        </div>
    );
}

export default AboutMe;