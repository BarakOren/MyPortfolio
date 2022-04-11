import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import grey from '@material-ui/core/colors/grey';
import styled from "styled-components";

const Container = styled.div`
width: 90vw;
height: 10vh;
margin-top: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
// background-color: #252427;
background-color: transparent;
`

const A = styled.a`
margin: 0 3%;
cursor: pointer;
`

const StyledLinkedin = styled(LinkedInIcon)`
    margin: 0 3%;
    cursor: pointer;
`

const StyledGithub = styled(GitHubIcon)`
margin: 0 3%;
cursor: pointer;
`



const Nav = () => {

    return(
        <Container>
            <A href="http://www.linkedin.com/in/barak-oren" target="_blank" rel="noopener noreferrer">

            <StyledLinkedin style={{fontSize: window.innerWidth > 800 ? 35 : 30, color: grey[300]}} />
            </A>
            <A href="https://github.com/BarakOren" target="_blank" rel="noopener noreferrer">
   
            <StyledGithub  style={{fontSize: 30, color: grey[300]}} />
            </A>
        </Container>
    )
}

export default Nav;