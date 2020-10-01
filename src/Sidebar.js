import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WorkIcon from '@material-ui/icons/Work';
import resume from './assests/resume.pdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Sidebar() {
    const handleEmailMe = () => {
        window.open("mailto:dtan42@gmail.com")
    }
    return (
        <div className="sidebar">
            <img className="sidebar__image"
                src="https://raw.githubusercontent.com/Dey-Sumit/dev_portfolio/862c69843b5ef28df9b7f32f15bb2def146b814c/src/assets/mightycoder.svg"
                alt=""
            />
            <div className="sidebar__name">An <span>Doan</span></div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <WorkIcon className="sidebar__icon" download="resume.pdf" /> Download Resume
                </div>
            </a>
            <figure className="sidebar__socialicon">
                <a href="">
                    <FacebookIcon className="sidebar__icon" />
                </a>
                <a href="">
                    <InstagramIcon className="sidebar__icon" />
                </a>
                <a href="">
                    <LinkedInIcon className="sidebar__icon" />
                </a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href=""><GitHubIcon className="sidebar__icon" />Github</a>
                </div>
                <div className="sidebar__item">dtan42@gmail.com</div>
                <div className="sidebar__item">0450669092</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </div>
    )
}

export default Sidebar
