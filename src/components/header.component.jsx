import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
    z-index: 0;
    background-color: transparent;
    height: 6vw;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-bottom: 2px solid #3e3e3e;
    @media only screen and (max-width: 800px){
        display: none;
}
`

const Name = styled.p`
    margin: 0 0;    
`

const Links = styled.div`
    margin: 0 0;
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2vw;
    margin: 0% 0 0 5%;
    transition: color .5s;
    color: #8e8d8f;

    &:hover{
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
`

const Header = () => {

    const location = useLocation().pathname;

    return(
            <Container>
                <Name>Barak Oren</Name>
                <Links >
                    <StyledLink style={{color: location === "/" ? "white" : ""}} to="/" >About</StyledLink>
                    <StyledLink style={{color: location === "/projects" ? "white" : ""}} to="/projects" >Projects</StyledLink>
                    <StyledLink style={{color: location === "/contact" ? "white" : ""}} to="/contact" >Contact</StyledLink>  
                </Links>
        </Container>
    )
}

export default Header;