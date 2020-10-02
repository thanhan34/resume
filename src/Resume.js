import React from 'react'
import './Resume.css'
import react from './assests/icons/react.svg'
import python from './assests/icons/python.svg'
import Bar from './Bar';
import { motion } from 'framer-motion'

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
    const resume_variants = {
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


        <motion.div className="resume"
            variants={resume_variants}
            initial="hidden"
            animate="visible"
        >
            <div className="resume__background">
                <div className="resumeCard__Education" >
                    <h4 className="resumeCard__heading">
                        Education
                    </h4>
                    <div className="resumeCard__body">
                        <h5 className="resumeCard__title">
                            Master of Computer Science
                        </h5>
                        <p className="resumeCard__name">
                            Queensland University of Technology ( 2015-2017)
                            <li>Advanced Information Storage and Retrieval</li>
                            <li>Advanced Topics in Artificial Intelligence</li>
                            <li>Mobile and Pervasive Systems</li>
                            <li>Data Mining Technology and Applications</li>
                            <li>Programming Language Theory</li>
                            <li>Analysis of Programs</li>
                            <li>Project Management</li>
                            <li>Advanced Network Engineering</li>
                        </p>

                    </div>
                </div>
                <div className="resumeCard__Experience" >
                    <h4 className="resumeCard__heading">
                        Experience
                    </h4>
                    <div className="resumeCard__body">
                        <h5 className="resumeCard__title">
                            Intern
                        </h5>
                        <p className="resumeCard__name">
                            SOL Edu Pty Ltd (2018)
                            <li>Provided on-site IT support to staff for technical issues with printers, internet connectivity, computers, tablets and mobile phones.</li>
                            <li>Using Wordpress to manage the content for 9 websites.</li>
                            <li>Set up ICT services for meetings and training sessions.</li>
                            <li>Assist company’s projects on a range of issues related to systems and infrastructure.</li>
                            <li>Actively identify ICT service issues to be investigated and improved to ensure smooth and efficient work processes for staffs.</li>
                            <li>Maintain MAC/Windows computers, printers (cartridges & drums) and network.</li>
                            <li>Make a proposal to purchase IT equipment and assist the finance team in purchasing IT equipment.</li>
                            <li>Prepare manuals instructions on ICT services for staffs.</li>
                            <li>Perform other miscellaneous administrative tasks related to ICT services.</li>
                            <li>Online marketing</li>
                        </p>
                    </div>
                </div>
            </div>
            <div className="resume__skills">
                <div className="resumeLanguages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body">
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
                <div className="resumeLanguages">
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
        </motion.div>
    )
}

export default Resume
