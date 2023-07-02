import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/photography">Photography</Link>
                </li>
                <li>
                    <Link to="/aboutme">About Me</Link>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vTbVmNQjgAiXCvKyEqX2VbJMjHAiMj6zq0fSebiWUVMLYvlZNEbmyp0avP1KQGhEA/pub" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;