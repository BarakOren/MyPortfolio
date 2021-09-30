import './App.css';
import {useState, useEffect} from "react";
import {Route, Switch } from 'react-router-dom';
import About from "./about/about.component";
import Header from './header/header.component';
import Contact from "./contact/contact.component";
import Nav from "../src/nav/nav.component";
import Portfolio from "./portfolio/portfolio.component";
import Menu from './menu/menu.component';

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
      }
      window.addEventListener('resize', handleResize)
  },[width])

  return (
    <div className="App">
      {
        width > 800 ? <Header /> : <Menu />
      }
        <Switch>
          <Route exact component={About} path="/"/>
          <Route exact component={Contact} path="/contact"/>
          <Route exact component={Portfolio} path="/projects"/>
        </Switch>
      <Nav />
    </div>
  );
}

export default App;
