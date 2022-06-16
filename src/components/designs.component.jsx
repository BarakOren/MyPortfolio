import React from "react";
import styled from "styled-components";
import writer1 from "../assets/writer-1.png"
import writer2 from "../assets/writer-2.png";
import  {useState, useEffect} from "react"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 3vh 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
    @media only screen and (max-width: 1100px){
        height: 90vh;
    }
`

const Title = styled.h1`
    margin: 0vh 0 2vh 0;
    @media only screen and (max-width: 800px){
        font-size: 10vw;
    }
`

const Img = styled.img`
    width: 80%;
    margin: 30px 0;
    box-shadow: 0 5px 10px black;
    border-radius: 40px;
    opacity: ${p => p.loading ? 0 : 1};
    transition: 1s all;
    @media only screen and (max-width: 800px){
        width: 95%;
    }
`

const Loading = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 2vw;
    text-shadow: 0 0 10px white;
    @media only screen and (max-width: 800px){
        font-size: 5vw;
    }
`

const Designs = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })
    
    return(
    <Container>
        <Title>Designs</Title>
        {loading && <Loading>Loading...</Loading>}
        <Img loading={loading} src={writer1} />
        <Img loading={loading} src={writer2} />
    </Container>
    )
}

export default Designs;