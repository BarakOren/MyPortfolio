import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";



const Header = () => {

    const location = useLocation().pathname;

    return(
            <div className="header">
                <p className="name">Barak Oren</p>
                <div className="items">
                    <Link style={{color: location === "/" ? "white" : ""}} to="/" className="headerItem">About</Link>
                    <Link style={{color: location === "/projects" ? "white" : ""}} to="/projects" className="headerItem">Projects</Link>
                    <Link style={{color: location === "/contact" ? "white" : ""}} to="/contact" className="headerItem">Contact</Link>  
                </div>
        </div>
    )
}

export default Header;