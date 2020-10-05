import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '@material-ui/icons/GitHub';
function ProjectCard({ name, image, deployed_url, github_url, description }) {
    return (
        <div className="projectCard">
            <div className="projectCard__wrapper">
                <a href={deployed_url} target="_blank" className="projectCard_imageContainter">
                    <img src={image} alt={name} className="projectCard__image" />
                    <div className="projectCard__overlay">
                        <div className="projectCard__titleDetail">{name}</div>
                        <p className="projectCard__description">{description}</p>
                    </div>
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                        <GitHubIcon className="projectCard__icon" />
                    </a>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
