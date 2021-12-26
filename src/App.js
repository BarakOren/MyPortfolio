// import './App.css';
import {Route, Switch} from 'react-router-dom';
import About from "./components/about.component";
import Header from './components/header.component';
import Contact from "./components/contact.component";
import Nav from "./components/nav.component";
import Portfolio from "./components/portfolio.component";
import Menu from './components/menu.component';
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0 5%;
  /* background-color: #252427; */
  background-image: linear-gradient(to right, #252427, #202022, #1c1c1d, #181718, #131313);
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  -webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
 -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
  
}

p{
  color: #8e8d8f;
  font-size: 1.5vw;
}

h1{
  color: white;
  font-size: 4vw;
}

form, input, textarea{
  font-family: 'Montserrat', sans-serif;
}

::-webkit-scrollbar{
  width: 12px;
  height: 12px;
  background-color: #131313;
}

::-webkit-scrollbar-thumb{
  background: rgb(68, 68, 68);
  border-radius: 6px ;
}

::-webkit-scrollbar-thumb:hover{
  background: #8e8d8f;
}
      
`

function App() {

  return (
    <>
    <GlobalStyle />
        <Header />
        <Menu />
        <Switch>
          <Route exact component={About} path="/"/>
          <Route exact component={Contact} path="/contact"/>
          <Route exact component={Portfolio} path="/projects"/>
        </Switch>
        <Nav />
      </>
  );
}

export default App;
