import React from 'react';
import profile from '/Users/aryaranadive/Projects/ranapp.github.io/src/profile.JPG';
import "../styles/aboutme.css";

function AboutMe() {
    return (
        <div className = "section">
            <img src={profile} alt =""/>
            <h1>Thanks for taking the time to get to know me!</h1>
            <p>I’m a recent Computer Science graduate from the University of California, Davis who’s ecstatic to step into the tech industry. </p>
            <p>My past experiences include: automation at Travelers Insurance, frontend development with #include, and software development and statistical analysis at the UC Davis Center for Mind and Brain. </p>
            <p>You can read more about it here</p>
            <p>Besides coding and photography, some things that excite me are:</p>
            <ul>
                <li>Discovering cute local coffee shops to break free from Starbucks’ allure</li>
                <li>Vintage book and magazine covers</li>
                <li>Alternative r&b, dream pop, indie, bollywood lofi</li>
                <li>Exploring cities and their diverse architectural styles (sucker for Victorian)</li>
                <li>Book recommendations (current reads)</li>
                <li>Films with excellent cinematography </li>
                <li>Podcasts that hilariously dissect social and cultural phenomena</li>
                <li>Writing (either in the form of short stories, expressive journal entries, or Medium articles)</li>
                <li>Art and all of its forms</li>
            </ul>
            <p>But most of all, hearing from you!</p>
            <p>For inquiries, please contact me at aryaaranadive@gmail.com. For photography inquiries, you can reach me through my email or also message me on my instagram: @arirana.jpg.</p>
        </div>
    );
}

export default AboutMe;