import React from "react";
import styled from "styled-components";


const Card = styled.div`
    &.card{
    margin: 3vh 1vw;
    border-radius: 25px;
    height: 40vw;
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    box-shadow: none;
    position: relative;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.575);
    transition: 300ms all;
    &:hover {
        /* background-color: #804f1016; */

    }
    &:hover .backgroundImage {
        filter: blur(1px) saturate(60%);
        transition: 200ms;    
        }
    &:hover .content {
        opacity: 1;
        transition: 300ms;
    }  
    @media only screen and (max-width: 1200px){
        width: 90vw;
        height: 70vh;
        margin: 5% 0;
    }
    @media only screen and (max-width: 800px){
        width: 90vw;
        height: 70vh;
        margin: 5% 0;
    }
    @media only screen and (max-width: 500px){
        width: 90vw;
        height: 80vh;
        margin: 5% 0;
    }
}
    
    &.backgroundImage{
        width: 100%;
        height: 100%;
        background-color: black;
        background-position: center;
        background-size: cover;
    }

    &.content{
        opacity: 0.3;
        width: 70%;
        height: 35vw;
        transition: opacity 300ms;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 2.5vw;
        color: #b8b8b8;
        @media only screen and (max-width: 1200px){
            opacity: 1;
            height: 63vh;
        }   
        @media only screen and (max-width: 800px){
            width: 90%;
            height: 65vh;
        }
        @media only screen and (max-width: 500px){
            width: 90%;
            height: 75vh;
        }
    }

    &.name{
        border-radius: 25px;
        padding: 1vw 3vw;
        /* background-color: #3e3e3e; */
        font-size: 2.5vw;
        background-color: #191c38ed;
        color: white;
        margin: 0;
        box-shadow: 3px 3px 10px #ffffff18;

        @media only screen and (max-width: 1200px){
            font-size: 4vw;
        }
        @media only screen and (max-width: 800px){
            font-size: 6vw;
            padding: 1.5vw 5vw;
            background-color: #191c38ed;
        }
        @media only screen and (max-width: 500px){
            font-size: 8vw;
            padding: 3vw 7vw;
        }
      }

      &.infoContainer{
        padding: 1.5vw 2.5vw;
        border-radius: 25px;
        width: 40vw;
        /* background-color: #3e3e3e; */
        background-color: #191c38ed;
        color: #dadada;
        font-size: 1.3vw;
        margin: 0;
        box-shadow: 3px 3px 10px #ffffff18;
        text-align: left;


        @media only screen and (max-width: 1200px){
            width: 60vw;
        }
        @media only screen and (max-width: 800px){
            background-color: #191c38ed;
            color: white;
            width: 70vw;
            padding: 2vw 4vw;
        }
        @media only screen and (max-width: 500px){
            width: 70vw;
            padding: 3vw 5vw;
        }
      }

      &.info{
        margin: 0 0 1vw 0;
        text-align: center;
        @media only screen and (max-width: 1200px){
            font-size: 2vw;
        }
        @media only screen and (max-width: 800px){
            font-size: 2.5vw;
        }
        @media only screen and (max-width: 650px){
            font-size: 3vw;
        }
        @media only screen and (max-width: 500px){
            font-size: 4vw;
        }
      }

      &.subInfo{
        margin: 0;
        @media only screen and (max-width: 1200px){
            font-size: 1.8vw;
        }
        @media only screen and (max-width: 800px){
            font-size: 2vw;
            padding: 1vw 2vw;
        }
        @media only screen and (max-width: 650px){
            font-size: 2.5vw;
        }
        @media only screen and (max-width: 500px){
            font-size: 3.5vw;
        }
      }

      &.ButtonsContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        }
`
const A = styled.a`
    margin: 0;
    padding: 0.5vw 5vw;
    border-radius: 25px;
    background-color: #191c38ed;
    font-size: 1.5vw;
    color: #b8b8b8;
    text-decoration: none;
    transform: scale(1);
    transition: all 300ms;
    box-shadow: 3px 3px 10px #ffffff18;
    border: 1px solid rgb(255, 255, 255, 0.3);
    &:hover{
    transition: all 300ms;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px #ffffff7f;
    cursor: pointer;
    color: white;
    }
    @media only screen and (max-width: 1200px){
        font-size: 2vw;
        padding: 1vw 7vw;
    }
    @media only screen and (max-width: 1000px){
        font-size: 2vw;
        padding: 1vw 7vw;
    }
    @media only screen and (max-width: 800px){
        font-size: 3.5vw;
        padding: 0.5vw 8vw;
        color: white;
        background-color: #3e3e3ebc;
    }
    @media only screen and (max-width: 500px){
        font-size: 5vw;
        padding: 1.5vw 7vw;
    }

`

const ProjectCard = (props) => {
    const {name, info, subInfo, image, website, github} = props;

    return(
        <Card className="card" >
            <Card className="backgroundImage" style={{backgroundImage: `url(${image})`}} />
            <Card className="content">
            <Card className="name">{name}</Card>
            <Card className="infoContainer">
            <Card className="info">{info}</Card>
            {subInfo && subInfo.map((sub, index) => {
                return <Card key={index} className="subInfo">{sub}</Card>
            })}
            </Card>
            <Card className="ButtonsContainer">
                <A className="link" href={website} target="_blank" rel="noopener noreferrer">Website</A>
                {github && <A className="link" href={github} target="_blank" rel="noopener noreferrer">Github</A>}
            </Card>
        </Card>
    </Card>
    )
}

export default ProjectCard;