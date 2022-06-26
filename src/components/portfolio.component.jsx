import React from "react";
// import Rotem2 from "../assets/rotem2.jpg";
// import CRWN from "../assets/crwn-clothing.jpg";
import Writer from "../assets/writer.jpg";
// import Todo from "../assets/todo.jpg";
import webflow from "../assets/webflow.jpg";
// import Crooked from "../assets/crookedcarousel.jpg";
// import Trader from "../assets/Trader.jpg";
// import Weather from "../assets/weather.jpg";
import NuxtBlog from "../assets/cryptoblog.jpg";
import sp from "../assets/sp.jpg";
import styled from "styled-components";
import ProjectCard from "./card.component";
import coffee from "../assets/coffee2.jpg"

export const DATA = [
    {
        name: "Spot Finder",
        info: "SpotFinder is an application for extreme sports enthusiasts. locating, searching and navigate to spots based on different types of elements and obstacles",
        subInfo: [
            "-Interactive map containing locations uploaded by users. include features like adding new locations, navigation, searchbar and more.",
            "-Using Firebase to store, add or change data about locations and users.",
            "-built with React and Firebase."
        ],
        image: sp,
        website: "https://spotfinder-e8871.web.app/",
        github: "https://github.com/BarakOren/spot-finder" 
    },
    {
        name: "Nuxt Crypto Blog",
        info: "Crypto coins blog built with NUXT",
        subInfo: [
            "-Built with Nuxt, TailwindCSS, and Firebase",
        ],
        image: NuxtBlog,
        website: "https://barakoren.github.io/NuxtCryptoBlog/",
        github: "https://github.com/BarakOren/NuxtCryptoBlog" 
    },
    {
        name: "COFFEE DISCOVERY",
        info: "Discover the best and closest coffee shops with Next.js",
        subInfo: [
            "-Built with Next.js.",
        ],
        image: coffee,
        website: "https://coffee-discovery-e245nvyeo-defqon32.vercel.app/",
        github: "https://github.com/BarakOren/coffee-discovery" 
    },
    {
        name: "Webflow Portfolio",
        info: "My portfolio website using Webflow",
        subInfo: [
            "",
        ],
        image: webflow,
        website: "https://barak-oren.webflow.io/",
        github: null 
    },
    // {
    //     name: "Weather App",
    //     info: "Weather Application.",
    //     subInfo: [
    //         "-Using Redux-Sagas to work with Api and get weather information.",
    //         "-Users can add and remove locations to favorites. get weather by their location, or use search autocomplete to get the weather from any location.",
    //         "-Built with React, Redux, Redux-Sagas and Styled-Components."
    //     ],
    //     image: Weather,
    //     website: "https://barakoren.github.io/weather/",
    //     github: "https://github.com/BarakOren/weather" 
    // },
    {
        name: "Writer App",
        info: "A tool for graffiti artists that simulates combinations of specific color shades that art companeis produce.",
        subInfo: [
            "-Design and develop a solution for a real-life problem.",
            "-Programmed the website and app with react and redux.",
            "-Designed the app and website with Figma.",
        ],
        image: Writer,
        website: "https://barakoren.github.io/WriterApp/",
        github: "https://github.com/BarakOren/WriterApp"
    },
    // {
    //     name: "CRWN-CLOTHING",
    //     info: "E-Commerce Clothing Store! ",
    //     subInfo: [
    //         "-Built as part of the course 'Complete React Developer in 2021'",
    //         "-Built with React, Redux, Firebase, Redux-sagas and Sass"
    //     ],
    //     image: CRWN,
    //     website: "https://barakoren.github.io/CRWN-CLOTHING",
    //     github: "https://github.com/BarakOren/CRWN-CLOTHING" 
    // },
    // {
    //     name: "Rotem Brum",
    //     info: "Rotem Brum's Portfolio And Shop Project, ",
    //     subInfo: [
    //         "-Working with calligraphy artist/designer and use his work in the website.",
    //         "-Built with React, Redux, Sass, React-CSSTransitions and Paypal API",
    //     ],
    //     image: Rotem2,
    //     website: "https://barakoren.github.io/rotem-brum/",
    //     github: "https://github.com/BarakOren/rotem-brum"
    // },
    // {
    //     name: "Crooked Carousel",
    //     info: "Crooked carousel created with react, users can put any sizes and use it in their own websites.",
    //     image: Crooked,
    //     website: "https://codesandbox.io/s/caro-31fos?file=/src/carousel.js",
    //     github: "https://github.com/BarakOren/Crooked-Carousel" 
    // },
    // {
    //     name: "To-Do App",
    //     info: "Todo List App with light/dark theme Toggler, Built with react Firebase and Styled-Components",
    //     image: Todo,
    //     website: "https://to-do-857ef.web.app/",
    //     github: "https://github.com/BarakOren/Todo" 
    // }
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
                {DATA.map((project) => {
                    const {index, name, info, subInfo, image, website, github} = project;
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