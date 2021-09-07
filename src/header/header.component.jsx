import React, {useState, useEffect} from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../menu/menu.component";
import {setHeader} from "../redux/header/header.reducer";



const Header = () => {

    const dispatch = useDispatch();

    const headerState = useSelector(state => state.headerReducer.header);

    const styleOne = (headerState === "/") ? "white" : "";
    const styleTwo = (headerState === "/projects") ? "white" : "";
    const styleThree = (headerState === "/contact") ? "white" : "";

        const [dimensions, setDimensions] = useState(window.innerWidth)
        useEffect(() => {
          function handleResize() {
            setDimensions(window.innerWidth)    
            }
            window.addEventListener('resize', handleResize)
        },[dimensions])

        const menu = (dimensions < 800) ? true : false;


    return(
        <div>
        {
            menu ? 
            
            <Menu />
            
            : <div className="header">
            <p className="name">Barak Oren</p>
            <div className="items">
            <Link style={{color: styleOne}} onClick={() => dispatch(setHeader("/"))} to="/" className="headerItem">About</Link>
            <Link style={{color: styleTwo}} onClick={() => dispatch(setHeader("/projects"))} to="/projects" className="headerItem">Projects</Link>
            <Link style={{color: styleThree}} onClick={() => dispatch(setHeader("/contact"))} to="/contact" className="headerItem">Contact</Link>  
            </div>
        </div>
        }
        </div>

    )
}

export default Header;