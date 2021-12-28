import React from "react";
import Rotem2 from "../assets/rotem2.jpg";
import CRWN from "../assets/crwn-clothing.jpg";
import Writer from "../assets/writer.jpg";
import Todo from "../assets/Todo.jpg";
import Crooked from "../assets/crookedcarousel.jpg";
// import Trader from "../assets/Trader.jpg";
import Weather from "../assets/weather.jpg";
import sp from "../assets/sp.jpg";
import styled from "styled-components";
import ProjectCard from "./card.component";

const DATA = [
    {
        name: "Spot Finder",
        info: "SpotFinder is an application for extreme sports enthusiasts. locating, searching and navigate to spots based on different types of elements and obstacles",
        subInfo: [
            "-Simple backend with firebase to store locations, users and more.",
            "-users can add locations to the database.",
            "-navigate to spots with mapbox api.",
            "-search and point to spots and locations with mapbox api.",
            "-built with react and firebase."
        ],
        image: sp,
        website: "https://spotfinder-e8871.web.app/",
        github: "https://github.com/BarakOren/spot-finder" 
    },
    {
        name: "CRWN-CLOTHING",
        info: "E-Commerce Clothing Store! ",
        subInfo: [
            "-Built as part of the course 'Complete React Developer in 2021'",
            "-Built with React, Redux, Firebase, Redux-saga and Sass"
        ],
        image: CRWN,
        website: "https://barakoren.github.io/CRWN-CLOTHING",
        github: "https://github.com/BarakOren/CRWN-CLOTHING" 
    },
    {
        name: "Weather App",
        info: "Weather Application.",
        subInfo: [
            "-Using api to get the current weather in selected locations/the user's current location.",
            "-Search bar with autocomplete.",
            "-User can add and remove locations to favorites.",
            "-Built with react, redux, redux-sagas and styled-components."
        ],
        image: Weather,
        website: "https://barakoren.github.io/weather/",
        github: "https://github.com/BarakOren/weather" 
    },
    {
        name: "Writer App",
        info: "A tool for graffiti artits that simulates combinations of specific color shades that art companeis produce.",
        subInfo: [
            "-Working together with react-native developer",
            "-App is ready to download from google play or can be used in a web version.",
            "-Designed and produced by myself.",
            "-Built with react, redux and sass."
        ],
        image: Writer,
        website: "https://barakoren.github.io/WriterApp/",
        github: "https://github.com/BarakOren/WriterApp"
    },
    {
        name: "Rotem Brum",
        info: "Rotem Brum's Portfolio And Shop Project, ",
        subInfo: [
            "-Working with calligraphy artist/designer and use his work in the website.",
            "-Built with React, Redux, Sass, React-CSSTransitions and Paypal API",
        ],
        image: Rotem2,
        website: "https://barakoren.github.io/rotem-brum/",
        github: "https://github.com/BarakOren/rotem-brum"
    },
    {
        name: "Crooked Carousel",
        info: "Crooked carousel created with react, users can put any sizes and use it in their own websites.",
        image: Crooked,
        website: "https://codesandbox.io/s/caro-31fos?file=/src/carousel.js",
        github: "https://github.com/BarakOren/Crooked-Carousel" 
    },
    {
        name: "To-Do App",
        info: "Todo List App with light/dark theme Toggler, Built with react Firebase and Styled-Components",
        image: Todo,
        website: "https://to-do-857ef.web.app/",
        github: "https://github.com/BarakOren/Todo" 
    }
    // {
    //     id: 4,
    //     name: "Trading site",
    //     info: "Trading stocks website, the user can buy stocks and watch the profit/loss in real time. built with React, Styled-components and Firebase",
    //     image: Trader,
    //     website: "https://barakoren.github.io/Trader/",
    //     github: "https://github.com/BarakOren/Trader" 
    // },
]

const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 3vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px){margin-bottom: 2vh;}
`

const Title = styled.h1`
    margin: 0 0 2vh 0;
    @media only screen and (max-width: 800px){font-size: 10vw;}
`

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


const Portfolio = () => {
    return(
        <Container>
            <Title>Projects</Title>
            <CardsContainer>
                {DATA.map(({index, name, info, subInfo, image, website, github}) => {
                    return(
                        <ProjectCard key={index} name={name} info={info} subInfo={subInfo} image={image} website={website} github={github} />
                    )
            })
            }
            </CardsContainer>
        </Container>
    )
}

export default Portfolio;