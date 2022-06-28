import React from "react";
import Writer from "../assets/writer.jpg";
import webflow from "../assets/webflow.jpg";
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
                        return <ProjectCard 
                        key={index} 
                        name={name} 
                        info={info} 
                        subInfo={subInfo} 
                        image={image} 
                        website={website} 
                        github={github} 
                        />
                    })
                }
            </CardsContainer>
        </Container>
    )
}

export default Portfolio;