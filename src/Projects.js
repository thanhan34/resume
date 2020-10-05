import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import db from './firebase'
import { motion } from 'framer-motion'


function Projects() {
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState('All')
    const [copyProjects, setCopyProjects] = useState([])
    useEffect(() => {
        let unsubscribe = db.collection("projects")
            .onSnapshot((snapshot) => {
                setProjects(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        project: doc.data(),
                    }))
                );
                setCopyProjects(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        project: doc.data(),
                    }))
                );
            });
        return () => {
            unsubscribe();
        }
    }, [])


    const handleFilterCategory = (name) => {
        console.log(active)
        const new_array = copyProjects.filter(project => project.project.category?.includes(name))
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
                    setProjects(copyProjects)
                    setActive("All")
                }}>All</div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'firebase' && 'projects__navbar-active'} onClick={() => handleFilterCategory('firebase')}>Firebase</div>
                <div className={active === 'node.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div className={active === 'vanilla' && 'projects__navbar-active'} onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>
            <div className="row">

                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.project.id}
                            name={project.project.name}
                            image={project.project.image}
                            deployed_url={project.project.deployed_url}
                            github_url={project.project.github_url}
                            description={project.project.description}
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Projects
