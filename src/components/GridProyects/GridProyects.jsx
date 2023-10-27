import React from "react"
import "./GridProyects.css"
import { projectsHome } from "../../../proyectsHome"

const GridProyects = () => {
    return (
        <div className="wrapper">
            <div className="home-hero">
                {projectsHome.map((project, index) => (
                    <div key={index} className={`project ${project.className}`} style={{ backgroundImage: `url(${project.imageUrl})` }}>
                        <div className="overlay">
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridProyects