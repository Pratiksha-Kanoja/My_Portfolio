import React from 'react';
import { motion } from 'framer-motion';
import Apple from '../Img/Apple.png';
import YouTube from '../Img/YouTube.png';
import HM from '../Img/HM.png';
import Paying_Guest from '../Img/Paying_Guest.png';
import Gap from '../Img/Gap.png';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    { 
        image: Apple, 
        title: "Apple Clone", 
        description: "A pixel-perfect clone of Apple's official website with modern design and smooth animations.", 
        stack: "React.js, Node.js, MongoDB", 
        link: "https://clone-of-apple.netlify.app", 
        github: "https://github.com/Pratiksha-Kanoja/Apple-Webpage",
        category: "Frontend",
        color: "from-gray-500 to-gray-700"
    },
    { 
        image: YouTube, 
        title: "YouTube Clone", 
        description: "Full-featured video sharing platform with user authentication and video streaming capabilities.", 
        stack: "React.js, Node.js, MongoDB", 
        link: "https://youtubeclone-09cc06.netlify.app", 
        github: "https://github.com/Pratiksha-Kanoja/YouTube-clone",
        category: "Full Stack",
        color: "from-red-500 to-red-700"
    },
    { 
        image: HM, 
        title: "H&M Clone", 
        description: "E-commerce platform with shopping cart, user accounts, and payment integration.", 
        stack: "React.js, Node.js, MongoDB", 
        link: "https://my-hnclone.netlify.app", 
        github: "https://github.com/Pratiksha-Kanoja/HM-Webpage",
        category: "E-commerce",
        color: "from-pink-500 to-pink-700"
    },
    { 
        image: Paying_Guest, 
        title: "Paying Guest Portal", 
        description: "Booking platform for PG accommodations with admin panel and user management system.", 
        stack: "HTML, CSS, JavaScript, MySQL, PHP", 
        github: "https://github.com/Pratiksha-Kanoja/Paying-Guest-Website",
        category: "Full Stack",
        color: "from-green-500 to-green-700"
    },
    { 
        image: Gap, 
        title: "Gap Clone", 
        description: "Fashion e-commerce website with product catalog, filtering, and responsive design.", 
        stack: "React.js, Node.js, MongoDB", 
        github: "https://github.com/Pratiksha-Kanoja/Gap-Webpage",
        category: "E-commerce",
        color: "from-blue-500 to-blue-700"
    }
];

const Projects = () => {
    return (
        <div id='project_container' className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden h-full"
                                whileHover={{ scale: 1.02, rotateY: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FaExternalLinkAlt className="text-gray-700 text-sm" />
                                            </motion.a>
                                        )}
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FaGithub className="text-gray-700 text-sm" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <p className="text-xs text-gray-500 mb-2 font-semibold">TECH STACK</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.stack.split(', ').map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gradient-to-r from-gray-700 to-black text-white py-2 px-4 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                                Live Demo
                                            </motion.a>
                                        )}
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-900 text-white py-2 px-4 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FaGithub className="text-xs" />
                                                Code
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        href="https://github.com/Pratiksha-Kanoja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;