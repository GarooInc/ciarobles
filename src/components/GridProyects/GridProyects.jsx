import React from "react"
import "./GridProyects.css"
import { projectsHome } from "../../../proyectsHome"
import { navigate } from "../../store"

const GridProyects = () => {

    const goToProjectDetails = (projectId) => {
        // Utiliza navigate para cambiar la ruta
        navigate(`/projects/${projectId}`)
    }

    return (
        <div className="wrapper">
            <div className="home-hero">
                {projectsHome.map((project, index) => (
                    <div key={index} className="project" style={{ backgroundImage: `url(${project.imageUrl})` }}
                        onClick={() => goToProjectDetails(project.id)}
                    >
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