import React from 'react'
import './Homepage.css'
import Apple from '../Img/Apple.png'
import YouTube from '../Img/YouTube.png'
import HM from '../Img/HM.png'
import Paying_Guest from '../Img/Paying_Guest.png'
import Gap from '../Img/Gap.png'
import { FaGithub } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const Projects = () => {
    return (
        <div id='project_container'>
            <div className="project_header">
                <h1>PROJECTS</h1>
            </div>
            <div className='projects'>
                <div>
                    <div>
                        <img src={Apple} alt="" />
                    </div>
                    <div className='project_desc'>
                        <p>Apple Clone</p>
                        <p>Description : This project is a clone of the latest Apple website.</p>
                        <p>Tech Stack : React.js, Node.js and MongoDb</p>
                    </div>
                    <div>
                        <a href="https://clone-of-apple.netlify.app">
                            <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                        <a href="https://github.com/Pratiksha-Kanoja/Apple-Webpage ">
                            <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={YouTube} alt="" />
                    </div>
                    <div className='project_desc'>
                        <p>YouTube Clone</p>
                        <p>Description : This project is a clone of the popular video-sharing platform, YouTube.</p>
                        <p>Tech Stack : React.js, Node.js and MongoDb</p>
                    </div>
                    <div>
                        <a href="https://youtubeclone-09cc06.netlify.app">
                            <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                        <a href="https://github.com/Pratiksha-Kanoja/YouTube-clone ">
                            <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={HM} alt="" />
                    </div>
                    <div className='project_desc'>
                        <p>H&M Clone</p>
                        <p>Description : Create a web application that mimics the functionality of H&M's online shopping platform.</p>
                        <p>Tech Stack : React.js, Node.js and MongoDb</p>
                    </div>
                    <div>
                        <a href=" https://my-hnclone.netlify.app">
                            <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                        <a href="https://github.com/Pratiksha-Kanoja/HM-Webpage ">
                            <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Paying_Guest} alt="" />
                    </div>
                    <div className='project_desc'>
                        <p>Paying Guest Clone</p>
                        <p>Description : The purpose of PG booking Website is to automate the manual system by computerised equipments</p>
                        <p>Tech Stack : HTML, CSS, javascript and MySQL</p>
                    </div>
                    <div>
                        <a href="https://github.com/Pratiksha-Kanoja/Paying-Guest-Website">
                            <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Gap} alt="" />
                    </div>
                    <div className='project_desc'>
                        <p>Gap Clone</p>
                        <p>Description : This project is a clone of the latest Gap shopping platform.</p>
                        <p>Tech Stack : React.js, Node.js and MongoDb</p>
                    </div>
                    <div>
                        <a href="https://github.com/Pratiksha-Kanoja/Gap-Webpage">
                            <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects