import React from 'react'
import './Resume.css'
import react from './assests/icons/react.svg'
import python from './assests/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'Java',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]

function Resume() {
    return (
        <div className="container resume">
            <div className="row">
                <div className="resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Academy of Technology(2017-2021)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p>
                    </div>
                </div>
                <div className="resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            TCS (2020)
                        </p>
                        <p className="resume-card__details">I work as a intern in TCS and also completed some projects on testing</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar
                                    icon={language.icon}
                                    name={language.name}
                                    level={language.level}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body" >
                        {
                            tools.map(tool =>
                                <Bar
                                    icon={tool.icon}
                                    name={tool.name}
                                    level={tool.level}
                                />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
