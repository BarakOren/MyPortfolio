import React from "react";
import pdf from "./Resume.pdf";
import styled from "styled-components";
import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Javascript} from "@styled-icons/boxicons-logos/Javascript";
import {ReactLogo} from "@styled-icons/boxicons-logos/ReactLogo";
import {Redux} from "@styled-icons/boxicons-logos/Redux";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";
import {Sass} from "@styled-icons/fa-brands/Sass"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    margin: 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: default;
    @media only screen and (max-width: 1100px){
        height: 90vh;
    }
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled.p`
    font-weight: 300;
    width: 100%;
    color: white;
    font-size: 10vw;
    margin: 0;
    @media only screen and (max-width: 1100px){
        text-align: center;
        font-size: 13vw;
        margin: 0 0 0 0;
    }
    @media only screen and (max-width: 768px){
        font-size: 13vw;
    }
    @media only screen and (max-width: 500px){
        font-size: 15vw;
    }
`

const FrontEnd = styled.p`
    font-weight: 300;
    font-size: 3vw;
    margin: 0 0 0 40%;
    @media only screen and (max-width: 1100px){
        font-size: 5vw;
        margin: 0 0 0 0;  
    }
    @media only screen and (max-width: 768px){
        font-size: 5vw;
    }
    @media only screen and (max-width: 500px){
        font-size: 7vw;
    }
`

const Description = styled.p`
    width: 70%;
    @media only screen and (max-width: 1100px){
        width: 80%;
        font-size: 2.5vw;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 3vw;
    }
    @media only screen and (max-width: 500px){
        font-size: 5vw;
    }
`

const Icons = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1100px){
    width:80%;
    display: flex;
    justify-content: space-evenly;
    }
    @media only screen and (max-width: 768px){
    width:100%;
    display: flex;
    justify-content: space-evenly;
    }

`

const Button = styled.a`
    text-decoration: none;
    padding: 0.7% 3%;
    background-color: #423f47;
    color: white;
    text-align: center;
    border: 2px solid rgb(255, 136, 0);
    box-shadow: rgb(0 0 0 / 60%) 1px 3px 2px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    font-size: 1.3vw;
    &:hover {
        box-shadow: rgb(255, 136, 0) 0px 0px 20px;
    }
    @media only screen and (max-width: 1100px){
        font-size: 2vw; 
        padding: 1vw 4vw;
    }
    @media only screen and (max-width: 768px){
        font-size: 4vw;
        padding: 1vw 5vw;
    }
    @media only screen and (max-width: 500px){
        font-size: 5vw;
        padding: 2vw 7vw;
    }
`

const HtmlIcon = styled(Html5)`
    color: #e44c24;
    margin: 0 10px;
`

const CssIcon = styled(Css3)`
    color: #2babe4;
    margin: 0 10px;
`

const ReactIcon = styled(ReactLogo)`
    color: #63dbfb;
    margin: 0 10px;
`

const ReduxIcon = styled(Redux)`
    color: #764db8;
    margin: 0 10px;
`

const JavascriptIcon = styled(Javascript)`
    color: #f4dc1c;
    margin: 0 10px;
`

const StyledIcon = styled(Styledcomponents)`
    color: #e2a021;
    margin: 0 10px;
`

const SassIcon = styled(Sass)`
    color: #cd6799;
    margin: 0 10px;
`

const About = () => {
    
    return(
    <Container>
        <TitleContainer>
            <Name>Barak Oren</Name>
            <FrontEnd>Front-End Developer</FrontEnd>
        </TitleContainer>
            <Description>Im a Self-Taught front-end developer with a big passion for the combination of design and coding. searching for my next job as a front-end developer.</Description>
            {/* <div className="icons">
            <i id="icon" className="devicon-html5-plain-wordmark colored"></i>
            <i id="icon" className="devicon-css3-plain-wordmark colored"></i>
            <i id="icon" className="devicon-javascript-plain colored"></i>
            <i id="icon" className="devicon-react-original-wordmark colored"></i>
            <i id="icon" className="devicon-redux-original"></i>
            <i id="icon" className="devicon-sass-original colored"></i>
            </div> */}
            <Icons>
            <HtmlIcon /><CssIcon /><JavascriptIcon />
            <ReactIcon /><ReduxIcon /><StyledIcon />
            <SassIcon />
            </Icons>
      
        <Button href={pdf} target="blank" >Resume</Button>

    </Container>
    )
}

export default About;