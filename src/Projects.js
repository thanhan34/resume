import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
import db from './firebase'


function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        let unsubscribe = db.collection("projects")
            .onSnapshot((snapshot) => {
                setProjects(
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
    console.log(projects)
    // const [projects, setProjects] = useState(dataProjects)
    const handleFilterCategory = (name) => {
        const new_array = projects.filter(project => project.project.category?.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(projects)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
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
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
