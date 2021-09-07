import React, {useState} from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {useDispatch, useSelector} from "react-redux";
import {setHeader} from "../redux/header/header.reducer";
import {toggleMenu} from "../redux/header/menu.reducer";
import {Link} from "react-router-dom";

const Menu = () => {
        
    const menuState = useSelector(state => state.menuReducer.menu);
    var toggler = menuState ? "" : "hidden";


    const dispatch = useDispatch();

    function select(location){
        dispatch(toggleMenu());
        setHeader(location);
    }

    return(
        <div>
            <MenuIcon onClick={() => dispatch(toggleMenu())} style={{ fontSize: 50 }} className="hamburger" style={{ color: grey[100] }} />

            <div className={`menu ${toggler}`}>
                <div className="itemContainer">
                    <Link to="/" onClick={() => select("/")} className="menuItem">About</Link>
                    <Link to="/projects" onClick={() => select("/projects")} className="menuItem">Projects</Link>
                    <Link to="/contact" onClick={() => select("/contact")} className="menuItem">Contact</Link>
            </div>

        </div>
        </div>
    )
}



export default Menu;