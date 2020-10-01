import React from 'react'
import github from './assests/icons/github.svg'
import './ProjectCard.css'
function ProjectCard({ name, image, deployed_url, github_url }) {
    return (
        <div className="projectCard">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    )
}

export default ProjectCard
