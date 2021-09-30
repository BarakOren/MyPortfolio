import React from "react";
import "./portfolio.styles.scss";
import Rotem2 from "../assets/rotem2.jpg";
import CRWN from "../assets/crwn-clothing.jpg";
import Writer from "../assets/noshadow.png";
import Todo from "../assets/Todo.jpg";
import Crooked from "../assets/crookedcarousel.jpg";

const DATA = [
    {
        id: 1,
        name: "Rotem Brum",
        info: "Rotem Brum's Portfolio And Shop Project",
        image: Rotem2,
        website: "https://barakoren.github.io/rotem-brum/",
        github: "https://github.com/BarakOren/rotem-brum"
    },
    {
        id: 2,
        name: "Writer App",
        info: "A Simple Tool For Artists, Created By Myself.",
        image: Writer,
        website: "https://barakoren.github.io/WriterApp/",
        github: "https://github.com/BarakOren/WriterApp"
    },
    {
        id: 3,
        name: "CRWN-CLOTHING",
        info: "Full Clothing Store With Firebase Database",
        image: CRWN,
        website: "https://barakoren.github.io/CRWN-CLOTHING",
        github: "https://github.com/BarakOren/CRWN-CLOTHING" 
    },
    {
        id: 4,
        name: "To-Do App",
        info: "Todo List App with light/dark theme Toggler, Built with Firebase and Styled-Components",
        image: Todo,
        website: "https://to-do-857ef.web.app/",
        github: "https://github.com/BarakOren/Todo" 
    },
    {
        id: 5,
        name: "Crooked Carousel",
        info: "Crooked carousel created with react",
        image: Crooked,
        website: "https://codesandbox.io/s/caro-31fos?file=/src/carousel.js",
        github: "https://github.com/BarakOren/Crooked-Carousel" 
    },
]

const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1 className="projectsTitle">Projects</h1>
            <div className="cardsContainer">
                {DATA.map(({id, name, info, image, website, github}) => (
            <div className="card" key={id}>
                
                <div className="background-image" style={{
                backgroundImage: `url(${image})`
                }} />
                
                <div className="content">
                    <h1 className="name">{name}</h1>
                    <p className="info">{info}</p>
                    <a className="link" href={website} target="_blank" rel="noopener noreferrer">website</a>
                    <a className="link" href={github} target="_blank" rel="noopener noreferrer">github</a>                </div>
            </div>
            ))
            }
            </div>
        </div>
    )
}

export default Portfolio;