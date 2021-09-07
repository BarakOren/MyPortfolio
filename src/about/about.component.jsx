import React from "react";
import "./about.styles.scss";
import {Link} from "react-router-dom";
import Nav from "../nav/nav.component";

const About = () => {
    
    return(
    <div className="about">
        <div className="first">
            <h1 className="barak">Barak Oren</h1>
            <p className="frontEnd">Front-End Developer</p>
        </div>
            <p className="second">Im a Self-Taught front-end developer with a big passion for the combination of design and coding. searching for my next job as a front-end developer.
            </p>
            <div className="icons">
            <i id="icon" className="devicon-html5-plain-wordmark colored"></i>
            <i id="icon" className="devicon-css3-plain-wordmark colored"></i>
            <i id="icon" className="devicon-javascript-plain colored"></i>
            <i id="icon" className="devicon-react-original-wordmark colored"></i>
            <i id="icon" className="devicon-redux-original"></i>
            <i id="icon" className="devicon-sass-original colored"></i>
            
            </div>
        <div className="buttons">
        <a className="button">Resume</a>
        </div>
    </div>
    )
}

export default About;