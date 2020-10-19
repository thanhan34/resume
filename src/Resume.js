import React from 'react'
import './Resume.css'
import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'



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
