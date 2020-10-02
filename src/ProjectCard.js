import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '@material-ui/icons/GitHub';
function ProjectCard({ name, image, deployed_url, github_url }) {
    return (
        <div className="projectCard">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                        <GitHubIcon className="projectCard__icon" />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    )
}

export default ProjectCard
