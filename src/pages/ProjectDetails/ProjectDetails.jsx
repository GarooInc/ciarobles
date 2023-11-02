import React from 'react'
import { projectsHome } from "../../../proyectsHome"
import PropTypes from 'prop-types'
import NavBar from '../../components/NavBar/NavBar'

const ProjectDetails = ({ id }) => {
    // Encuentra el proyecto que coincide con el ID proporcionado
    const project = projectsHome.find(p => p.id === id)

    if (!project) {
        return <h1>Project not found</h1>
    }

    return (
        <div className="min-h-screen overflow-hidden flex flex-col">
            <div className="bg-black w-full py-8">
                <NavBar />
            </div>
            <section className="w-full p-10 md:p-20 lg:pt-10 xl:py-20 pb-25 min-h-[calc(100vh-400px)] sm:min-h-[calc(100vh-435px)]">
                <h1 className="text-3xl font-bold text-black mb-4">{project.title}</h1>
                <div className="flex items-center mb-12 justify-center w-full">
                    <img src={project.imageUrl} alt={project.title} className="w-full rounded-lg shadow-xl" />
                </div>
                <span className="text-gray-500 mb-12">{project.description}</span>
            </section>
        </div>
    )
}

ProjectDetails.propTypes = {
    id: PropTypes.string.isRequired,
}


export default ProjectDetails;
