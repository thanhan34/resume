import React from 'react';
import api from './assests/icons/api.svg'
import backend from './assests/icons/backend.svg'
import algo from './assests/icons/algo.svg'
import computer from './assests/icons/computer.svg'
import repair from './assests/icons/repair.svg'
import puzzle from './assests/icons/puzzle.svg'
import Skillcard from './Skillcard'
import './About.css';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                Graduate master student with good knowledge of Computer Science and Software Engineering. Enthusiastic coder. Highly adaptable, quick learner and able to work under pressure. Ability to seek opportunities to participate, identify opportunities for continuous improvement. Ability to collaborate with development team to find the best solution to problems
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
        </div>
    );
};

export default About;