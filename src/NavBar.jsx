import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react"


function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/personal_site" className="brand-name">
                Arya Ranadive
            </a>
            <button className="hamburger"
             onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }
                  >
                <ul onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>
                    <li>
                        <Link to="/projects">Projects</Link>
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
            </div>
        </nav>
    );
}

export default Navbar;