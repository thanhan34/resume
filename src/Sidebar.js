import React from 'react';
import './Sidebar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WorkIcon from '@material-ui/icons/Work';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { motion } from 'framer-motion'
function Sidebar() {
    const handleEmailMe = () => {
        window.open("mailto:dtan42@gmail.com")
    }
    const sidebar_viriant = {
        hidden: {
            x: '-10vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }
    return (
        <motion.div className="sidebar"
            variants={sidebar_viriant}
            initial="hidden"
            animate="visible"
        >
            <img className="sidebar__image"
                src="https://raw.githubusercontent.com/Dey-Sumit/dev_portfolio/862c69843b5ef28df9b7f32f15bb2def146b814c/src/assets/mightycoder.svg"
                alt=""
            />
            <div className="sidebar__name">An <span>Doan</span></div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-1a7ec.appspot.com/o/resume.pdf?alt=media&token=8464950c-d669-4232-ac15-a470ad95fb74" download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <WorkIcon className="sidebar__icon" download="resume.pdf" /> Download Resume
                </div>
            </a>
            <figure className="sidebar__socialicon">
                <a href="https://www.facebook.com/DanChoi.DaiKa/">
                    <FacebookIcon className="sidebar__icon" />
                </a>
                <a href="https://www.linkedin.com/in/an-doan-3130b1133/">
                    <LinkedInIcon className="sidebar__icon" />
                </a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/thanhan34"><GitHubIcon className="sidebar__icon" />   Github</a>
                </div>
                <div className="sidebar__item">dtan42@gmail.com</div>
                <div className="sidebar__item">0450669092</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </motion.div>
    )
}

export default Sidebar
