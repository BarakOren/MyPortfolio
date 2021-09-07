import React from "react";
import "./portfolio.styles.scss";


const DATA = [
    {
        id: 1,
        name: "Rotem Brum",
        info: "Rotem Brum's Portfolio Project",
        image: "https://www.forcmagazine.com/wp-content/uploads/2016/05/cal.jpg",
        link: "https://www.google.com/"
    },
    {
        id: 2,
        name: "Writer App",
        info: "Writer App Is An Art Tool, Both App And Website Written And Designed By Myself",
        image: "https://play-lh.googleusercontent.com/sCD1-Q4jbXoqIz1e5Qbb3SLEZdkL36OGy96kG0SA2nYaXG8p8HIBSGby6H1bwteDfA=s1200",
        link: "https://www.google.com/"
    },
    {
        id: 3,
        name: "project 3",
        info: "bla bla bla bla bla bla bla bla bla bla bla",
        image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/thumbs/800x531/35527.jpg",
        link: "https://www.google.com/"
    },
]

const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1 className="projectsTitle" style={{marginTop: "10vh"}}>Projects</h1>
            <div className="cardsContainer">
                {DATA.map(({id, name, info, image, link}) => (
            <div className="card" key={id}>
                
                <div className="background-image" style={{
                backgroundImage: `url(${image})`
                }} />
                
                <div className="content">
                    <h1 className="name">{name}</h1>
                    <p className="info">{info}</p>
                </div>
            </div>
            ))
            }
            </div>
        </div>
    )
}

export default Portfolio;