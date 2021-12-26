import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const Hamburger = styled(MenuIcon)`
    display:none !important;
    @media only screen and (max-width: 800px){
        display: initial !important;
        z-index: 4;
        position: fixed;
        top: 3%;
        left: 5%;
        transform: scale(1);
        transition: transform 200ms;
        &:hover{
            cursor: pointer;
        }
`

const Container = styled.div`
    display:none !important;
    @media only screen and (max-width: 800px){
        display: initial !important;
        z-index: 3;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        transition: right 0.8s ease;
        background-color: #252427;
        }
`

const LinksContainer = styled.div`
    margin-top: 12vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
color: #8e8d8f;
margin: 5% 0;
padding: 3% 7%;
border: solid 1px grey;
border-radius: 25px;
font-size: 7vw;
text-decoration: none;
`

const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    const location = useLocation().pathname;

    return(
        <>
            <Hamburger onClick={() => setMenuToggle(!menuToggle)}  className="hamburger" style={{ color: grey[100], fontSize: 40 }} />
            <Container style={{right: menuToggle ? "0" : "101vw"}}>
                <LinksContainer>
                    <StyledLink style={{color: location === "/" ? "white" : "", borderColor: location === "/" ? "white" : ""}} to="/" onClick={() => setMenuToggle(false)} className="menuItem">About</StyledLink>
                    <StyledLink style={{color: location === "/projects" ? "white" : "", borderColor: location === "/projects" ? "white" : ""}} to="/projects" onClick={() => setMenuToggle(false)} className="menuItem">Projects</StyledLink>
                    <StyledLink style={{color: location === "/contact" ? "white" : "", borderColor: location === "/contact" ? "white" : ""}} to="/contact" onClick={() => setMenuToggle(false)} className="menuItem">Contact</StyledLink>
                </LinksContainer>
            </Container>
        </>
    )
}

export default Menu;