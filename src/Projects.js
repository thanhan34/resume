import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import { motion } from 'framer-motion'
import data_projects from './data/projects_data'

function Projects() {
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState('All')
    useEffect(() => {
        setProjects(data_projects)
    }, [])
    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }
    const project_variants = {
        hidden: {
            opacity: 0

        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6
            }
        }
    }
    return (
        <motion.div className="projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
        >
            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={() => {
                    setProjects(projects)
                    setActive("All")
                }}>All</div>
                <div className={active === 'react' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react')}>React</div>
                <div className={active === 'redux' && 'projects__navbar-active'} onClick={() => handleFilterCategory('redux')}>Redux</div>
                <div className={active === 'router' && 'projects__navbar-active'} onClick={() => handleFilterCategory('router')}>Router</div>
                <div className={active === 'firebase' && 'projects__navbar-active'} onClick={() => handleFilterCategory('firebase')}>Firebase</div>
                <div className={active === 'Content API' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Content API')}>Content API</div>
            </div>
            <div className="row">
                {
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            image={project.image}
                            deployed_url={project.deployed_url}
                            github_url={project.github_url}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Projects
