import React from "react";
import "./nav.styles.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import grey from '@material-ui/core/colors/grey';

const Nav = () => {

    function size(){
        if(window.innerWidth > 800){
            return 35;
        } else {
            return 30;
        }
    }

    return(
        <div className="nav">
            <a className="navItem" href="http://www.linkedin.com/in/barak-oren" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{fontSize: size(), color: grey[500]}} />
            </a>
            <a className="navItem" href="https://github.com/BarakOren" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="navItem" style={{fontSize: size, color: grey[500]}} />
            </a>
        </div>
    )
}

export default Nav;