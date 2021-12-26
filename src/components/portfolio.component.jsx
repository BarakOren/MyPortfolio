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
        info: "SpotFinder is an application for those how are into extreme sports",
        subInfo: [
            "-glsdgsdlacela;cecl",
            "-working with a backend developer as a team",
            "-working with more complex apis, ",
            "-glsdgsdlacela;cecl",
        ],
        image: sp,
        website: "https://spotfinder-e8871.web.app/",
        github: "https://github.com/ophirgal/myskatespots" 
    },
    {
        name: "CRWN-CLOTHING",
        info: "Full Clothing Store! Built with React, Redux, Firebase, Redux-saga and Sass",
        subInfo: [
            "-bladfshlsdflh",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
        image: CRWN,
        website: "https://barakoren.github.io/CRWN-CLOTHING",
        github: "https://github.com/BarakOren/CRWN-CLOTHING" 
    },
    {
        name: "Weather App",
        info: "Weather Application, Getting Current Weather, Add cities to favorites list and more, create with react, redux, redux-sagas and more",
        subInfo: [
            "-bladfshlsdflh",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
        image: Weather,
        website: "https://barakoren.github.io/weather/",
        github: "https://github.com/BarakOren/weather" 
    },
    {
        name: "Writer App",
        info: "A Simple Tool For Artists, Created By Myself. Built with React, Redux and Sass",
        subInfo: [
            "-Working together with react-native developer",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
        image: Writer,
        website: "https://barakoren.github.io/WriterApp/",
        github: "https://github.com/BarakOren/WriterApp"
    },
    {
        name: "Rotem Brum",
        info: "Rotem Brum's Portfolio And Shop Project, Built with React, Redux, Sass React-CSSTransitions, EmailJS API and Paypal API",
        subInfo: [
            "-bladfshlsdflh",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
        image: Rotem2,
        website: "https://barakoren.github.io/rotem-brum/",
        github: "https://github.com/BarakOren/rotem-brum"
    },
    {
        name: "Crooked Carousel",
        info: "Crooked carousel created with react",
        subInfo: [
            "-bladfshlsdflh",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
        image: Crooked,
        website: "https://codesandbox.io/s/caro-31fos?file=/src/carousel.js",
        github: "https://github.com/BarakOren/Crooked-Carousel" 
    },
    {
        name: "To-Do App",
        info: "Todo List App with light/dark theme Toggler, Built with Firebase and Styled-Components",
        subInfo: [
            "-bladfshlsdflh",
            "-sdfhdojsahjsdjohojasdhosaohjas",
            "-dsghjosdahojdsojahsjadohjoshojshos"
        ],
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

// @media only screen and (max-width: 1200px){
//     @media only screen and (max-width: 1190px){
//         @media only screen and (max-width: 800px){
//     @media only screen and (max-width: 500px){

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