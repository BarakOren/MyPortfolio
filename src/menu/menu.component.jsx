import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`

`

const Hamburger = styled(MenuIcon)`

`

const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    const location = useLocation().pathname;

    return(
        <div>
            <MenuIcon onClick={() => setMenuToggle(!menuToggle)}  className="hamburger" style={{ color: grey[100], fontSize: 40 }} />

            <div className={`menu ${menuToggle ? "" : "hidden"}`}>
                <div className="itemContainer">
                    <Link style={{color: location === "/" ? "white" : "", borderColor: location === "/" ? "white" : ""}} to="/" onClick={() => setMenuToggle(false)} className="menuItem">About</Link>
                    <Link style={{color: location === "/projects" ? "white" : "", borderColor: location === "/projects" ? "white" : ""}} to="/projects" onClick={() => setMenuToggle(false)} className="menuItem">Projects</Link>
                    <Link style={{color: location === "/contact" ? "white" : "", borderColor: location === "/contact" ? "white" : ""}} to="/contact" onClick={() => setMenuToggle(false)} className="menuItem">Contact</Link>
            </div>

        </div>
        </div>
    )
}



export default Menu;