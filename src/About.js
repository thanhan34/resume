import React from 'react';
import api from './assests/icon/api.svg'
import flowchart from './assests/icon/flow-chart.svg'
import computer from './assests/icon/computer.svg'
import puzzle from './assests/icon/puzzle.svg'
import Skillcard from './Skillcard'
import webdesign from './assests/icon/web-design.svg'
import backend from './assests/icon/backend.svg'
import './About.css';
import { motion } from 'framer-motion'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: "Handle database, authentication, storage and hosting with Firebase",
    },
    {
        icon: api,
        title: "Mobile Development",
        about: "Develop iOS mobile application with Swift"
    },
    {
        icon: flowchart,
        title: "Competitive Coder",
        about: "Continuing learn and apply new technologies to solve business problems"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: webdesign,
        title: "Future target",
        about: "Develop cross-platform mobile application with React Native and Progressive Web apps"
    },
]



const About = () => {
    const about_variants = {
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
        <motion.div className="about"
            variants={about_variants}
            initial="hidden"
            animate="visible"
        >
            <h6 className="about__intro">
                Graduate master student with good knowledge of  <strong>Computer Science and Software Engineering</strong>. Enthusiastic coder. Highly adaptable, quick learner and able to work under pressure. Ability to seek opportunities to participate, identify opportunities for continuous improvement. Ability to collaborate with development team to find the best solution to problems
            </h6>
            <div className="about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="aboutRow_container">
                    {
                        skills.map(skill =>
                            <Skillcard
                                icon={skill.icon}
                                title={skill.title}
                                about={skill.about}
                            />
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;