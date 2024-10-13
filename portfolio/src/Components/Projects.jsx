// import React from 'react'
// import './Homepage.css'
// import Apple from '../Img/Apple.png'
// import YouTube from '../Img/YouTube.png'
// import HM from '../Img/HM.png'
// import Paying_Guest from '../Img/Paying_Guest.png'
// import Gap from '../Img/Gap.png'
// import { FaGithub } from "react-icons/fa";
// import { CiCirclePlus } from "react-icons/ci";

// const Projects = () => {
//     return (
//         <div id='project_container'>
//             <div className="project_header">
//                 <h1>PROJECTS</h1>
//             </div>
//             <div className='projects'>
//                 <div>
//                     <div>
//                         <img src={Apple} alt="" />
//                     </div>
//                     <div className='project_desc'>
//                         <p>Apple Clone</p>
//                         <p>Description : This project is a clone of the latest Apple website.</p>
//                         <p>Tech Stack : React.js, Node.js and MongoDb</p>
//                     </div>
//                     <div>
//                         <a href="https://clone-of-apple.netlify.app">
//                             <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                         <a href="https://github.com/Pratiksha-Kanoja/Apple-Webpage ">
//                             <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <img src={YouTube} alt="" />
//                     </div>
//                     <div className='project_desc'>
//                         <p>YouTube Clone</p>
//                         <p>Description : This project is a clone of the popular video-sharing platform, YouTube.</p>
//                         <p>Tech Stack : React.js, Node.js and MongoDb</p>
//                     </div>
//                     <div>
//                         <a href="https://youtubeclone-09cc06.netlify.app">
//                             <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                         <a href="https://github.com/Pratiksha-Kanoja/YouTube-clone ">
//                             <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <img src={HM} alt="" />
//                     </div>
//                     <div className='project_desc'>
//                         <p>H&M Clone</p>
//                         <p>Description : Create a web application that mimics the functionality of H&M's online shopping platform.</p>
//                         <p>Tech Stack : React.js, Node.js and MongoDb</p>
//                     </div>
//                     <div>
//                         <a href=" https://my-hnclone.netlify.app">
//                             <CiCirclePlus style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                         <a href="https://github.com/Pratiksha-Kanoja/HM-Webpage ">
//                             <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <img src={Paying_Guest} alt="" />
//                     </div>
//                     <div className='project_desc'>
//                         <p>Paying Guest Clone</p>
//                         <p>Description : The purpose of PG booking Website is to automate the manual system by computerised equipments</p>
//                         <p>Tech Stack : HTML, CSS, javascript and MySQL</p>
//                     </div>
//                     <div>
//                         <a href="https://github.com/Pratiksha-Kanoja/Paying-Guest-Website">
//                             <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <img src={Gap} alt="" />
//                     </div>
//                     <div className='project_desc'>
//                         <p>Gap Clone</p>
//                         <p>Description : This project is a clone of the latest Gap shopping platform.</p>
//                         <p>Tech Stack : React.js, Node.js and MongoDb</p>
//                     </div>
//                     <div>
//                         <a href="https://github.com/Pratiksha-Kanoja/Gap-Webpage">
//                             <FaGithub style={{ fontSize: "40px", color: "#0182eb" }} />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects

import React from 'react';
import Apple from '../Img/Apple.png';
import YouTube from '../Img/YouTube.png';
import HM from '../Img/HM.png';
import Paying_Guest from '../Img/Paying_Guest.png';
import Gap from '../Img/Gap.png';
import { FaGithub } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const projects = [
    { image: Apple, title: "Apple Clone", description: "This project is a clone of the latest Apple website.", stack: "React.js, Node.js, MongoDb", link: "https://clone-of-apple.netlify.app", github: "https://github.com/Pratiksha-Kanoja/Apple-Webpage" },
    { image: YouTube, title: "YouTube Clone", description: "This project is a clone of the popular video-sharing platform, YouTube.", stack: "React.js, Node.js, MongoDb", link: "https://youtubeclone-09cc06.netlify.app", github: "https://github.com/Pratiksha-Kanoja/YouTube-clone" },
    { image: HM, title: "H&M Clone", description: "Create a web application that mimics the functionality of H&M's online shopping platform.", stack: "React.js, Node.js, MongoDb", link: "https://my-hnclone.netlify.app", github: "https://github.com/Pratiksha-Kanoja/HM-Webpage" },
    { image: Paying_Guest, title: "Paying Guest Clone", description: "The purpose of PG booking Website is to automate the manual system by computerised equipments.", stack: "HTML, CSS, JavaScript, MySQL,PHP", github: "https://github.com/Pratiksha-Kanoja/Paying-Guest-Website" },
    { image: Gap, title: "Gap Clone", description: "This project is a clone of the latest Gap shopping platform.", stack: "React.js, Node.js, MongoDb", github: "https://github.com/Pratiksha-Kanoja/Gap-Webpage" }
];

const Projects = () => {
    return (
        <div id='project_container' className="w-full lg:w-3/4 mx-auto px-4 sm:px-8 py-16">
            <div className="project_header text-center pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold border-b-2 border-blue-500 inline-block pb-2">PROJECTS</h1>
            </div>
            <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 shadow-md rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                        <div className="w-full h-[180px]">
                            <img src={project.image} alt={`${project.title}`} className="w-full h-full object-cover" />
                        </div>
                        <div className="project_desc px-5 py-4">
                            <p className="text-xl font-bold">{project.title}</p>
                            <p className="text-gray-600 mt-2">Description: {project.description}</p>
                            <p className="text-blue-500 mt-2">Tech Stack: {project.stack}</p>
                        </div>
                        <div className="flex gap-4 px-5 py-3">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <CiCirclePlus className="text-[40px] text-blue-500" />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-[40px] text-blue-500" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
