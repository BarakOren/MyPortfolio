import React from "react";
import "./about.styles.scss";
import pdf from "./Resume.pdf";
import styled from "styled-components";
import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Javascript} from "@styled-icons/boxicons-logos/Javascript";
import {ReactLogo} from "@styled-icons/boxicons-logos/ReactLogo";
import {Redux} from "@styled-icons/boxicons-logos/Redux";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";
import {Sass} from "@styled-icons/fa-brands/Sass"

const margin = "0 10px"

const HtmlIcon = styled(Html5)`
    color: #e44c24;
    margin: ${margin};
`

const CssIcon = styled(Css3)`
    color: #2babe4;
    margin: ${margin};
`

const ReactIcon = styled(ReactLogo)`
    color: #63dbfb;
    margin: ${margin};
`

const ReduxIcon = styled(Redux)`
    color: #764db8;
    margin: ${margin};
`

const JavascriptIcon = styled(Javascript)`
    color: #f4dc1c;
    margin: ${margin};
`

const StyledIcon = styled(Styledcomponents)`
    color: #e2a021;
    margin: ${margin};
`

const SassIcon = styled(Sass)`
    color: #cd6799;
    margin: ${margin};
`



const About = () => {
    
    return(
    <div className="about">
        <div className="first">
            <h1 className="barak">Barak Oren</h1>
            <p className="frontEnd">Front-End Developer</p>
        </div>
            <p className="second">Im a Self-Taught front-end developer with a big passion for the combination of design and coding. searching for my next job as a front-end developer.
            </p>
            {/* <div className="icons">
            <i id="icon" className="devicon-html5-plain-wordmark colored"></i>
            <i id="icon" className="devicon-css3-plain-wordmark colored"></i>
            <i id="icon" className="devicon-javascript-plain colored"></i>
            <i id="icon" className="devicon-react-original-wordmark colored"></i>
            <i id="icon" className="devicon-redux-original"></i>
            <i id="icon" className="devicon-sass-original colored"></i>
            </div> */}
            <div className="icons">
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <ReactIcon />
            <ReduxIcon />
            <StyledIcon />
            <SassIcon />
            </div>
        <div className="buttons">
        <a href={pdf} target="blank" className="button">Resume</a>

        </div>
    </div>
    )
}

export default About;