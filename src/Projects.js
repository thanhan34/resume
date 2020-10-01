import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
    const dataProjects = [
        {
            name: 'COVID 19 tracker',
            image: "https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302626_1280.jpg",
            deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
            github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
            category: ['react.js']
        },

        {
            name: 'Dev Talks',
            image: "https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_1280.jpg",
            deployed_url: 'https://dev-talks.herokuapp.com/',
            github_url: 'https://github.com/Dey-Sumit/Dev-talks',
            category: ['node.js', 'mongoDB', 'react.js']
        },

        {
            name: 'Realtime Chat App',
            image: "https://cdn.pixabay.com/photo/2015/11/27/20/28/florence-1066314_1280.jpg",
            deployed_url: 'https://sumit-chat.netlify.app/',
            github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
            category: ['node', 'socket.io', 'react']
        },

        {
            name: 'Tweeter Clone',
            image: "https://cdn.pixabay.com/photo/2013/04/11/19/46/louvre-102840_1280.jpg",
            deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
            github_url: 'https://github.com/Dey-Sumit/tweetme',
            category: ['django', 'react']
        },

        {
            name: 'Shop Website',
            image: "https://cdn.pixabay.com/photo/2016/08/12/20/43/stained-glass-1589648_1280.jpg",
            deployed_url: '!#',
            category: ['html_css', 'vanilla']
        },

        {
            name: 'Dev Portfolio',
            image: "https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-ballon-1807521_960_720.jpg",
            deployed_url: 'http://suprateem.herokuapp.com/',
            category: ['vanilla']
        },

        {
            name: 'Bengali New Year',
            image: "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg",
            deployed_url: 'https://dey-sumit.github.io/NewYear/',
            category: ['vanilla']
        },

        {
            name: 'Color Classification using tf.js',
            image: "https://cdn.pixabay.com/photo/2017/11/25/12/34/hamburg-2976711_1280.jpg",
            deployed_url: '!#',
            github_url: 'https://github.com/Dey-Sumit/color-classification',
            category: ['node', 'machine_learning']
        },

        {
            name: 'Blinking bubbles',
            image: "https://cdn.pixabay.com/photo/2016/04/25/23/30/home-1353389_1280.jpg",
            deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
            github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
            category: ['processing']
        }
    ]
    const [projects, setProjects] = useState(dataProjects)
    const handleFilterCategory = (name) => {
        const new_array = dataProjects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(dataProjects)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            image={project.image}
                            deployed_url={project.deployed_url}
                            github_url={project.github_url}
                        />)
                }
            </div>
        </div>
    )
}

export default Projects
