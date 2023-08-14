import React from 'react';
import profile from '/Users/aryaranadive/Projects/ranapp.github.io/src/project_images/Untitled-1.jpg';
import "../styles/aboutme.css";

function AboutMe() {
    return (
        <div className = "section">
            <img src={profile} alt =""/>
            <div className='content'>
            <h1 id="heading">A little bit about me...</h1>
            <p>I’m a recent Computer Science Graduate from the University of California, Davis who’s ecstatic to step into the tech industry. </p>
            <p>My past experiences include: <span id="italics">automation at Travelers Insurance, frontend development with #include, and software development and statistical analysis at the UC Davis Center for Mind and Brain. </span> </p>
            <p>You can read more about it <a href="https://docs.google.com/document/d/e/2PACX-1vTbVmNQjgAiXCvKyEqX2VbJMjHAiMj6zq0fSebiWUVMLYvlZNEbmyp0avP1KQGhEA/pub">here.</a></p>
            <p>Besides coding and photography, some things that excite me are:</p>
            <ul>
                <li>Discovering cute coffee shops to break free from Starbucks’ hold</li>
                <li>Vintage book and magazine covers</li>
                <li>Soft-serve ice cream</li>
                <li>Alternative r&b, dream pop, indie, bollywood lofi</li>
                <li>Exploring cities and their diverse architectural styles (biased toward Victorian being an SF local)</li>
                <li>Book recommendations ( <a href="https://www.goodreads.com/user/show/165394356-arya">current reads</a> )</li>
                <li>TV/Films with artful cinematography</li>
                <li>Tote Bags</li>
                <li>Writing (either in the form of short stories, expressive journal entries, or Medium articles)</li>
                <li>Twilight skies</li>
            </ul>
            <p>But most of all, hearing from you!</p>
            <p>For inquiries, please contact me at <a href="mailto:aryaaranadive@gmail.com">aryaaranadive@gmail.com</a>. For photography inquiries, you can reach me through my email or also message me on my instagram: <a href="https://instagram.com/picturesbyarya?igshid=OGQ5ZDc2ODk2ZA==">@picturesbyarya</a>.</p>
            </div>
        </div>
    );
}

export default AboutMe;