import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Software Developer",
            company: "IndianAppGuy Tech PVT LTD",
            location: "Bangalore, India",
            duration: "Oct 2024 - Present",
            responsibilities: [
                "Developed and maintained dynamic web applications for various company projects, including MagicSlides, MagicForm, AskVideo, TalkingPDF, and SheetAI.",
                "Implemented robust authentication systems across all platforms, enhancing user security and improving access control mechanisms.",
                "Gained hands-on experience with front-end and back-end development, database management, and third-party API integrations.",
                "Developed and maintained mcp tools for Magicslides.ai and Magicchat.ai"
            ]
        },
        {
            title: "Fullstack Development Intern",
            company: "IndianAppGuy Tech PVT LTD",
            location: "Bangalore, India",
            duration: "Feb 2024 - Oct 2024",
            responsibilities: [
                "Developed presentations for the MagicSlides app using pptxgenjs, Google Apps Script, and jsPDF.",
                "Wrote custom prompts for slide content generation, ensuring dynamic and user-specific slide creation.",
                "Created a file compression tool to optimize storage and upload efficiency for the MagicSlides app.",
                "Developed a Google Doc URL to PPTX converter to streamline document-to-presentation workflows within MagicSlides.",
                "Developed a text to PPTX converter, enabling seamless text input to presentation slide creation for MagicSlides."
            ]
        },
        {
            title: "Research Internship",
            company: "Vishwakarma Institute Of Information Technology",
            location: "Pune",
            duration: "Aug 2022 - Jan 2023",
            responsibilities: [
                "Developed a real-time driver drowsiness detecting system using computer vision and machine learning techniques.",
                "Designed and trained a deep learning model using a large dataset of driver images to detect drowsiness with high accuracy.",
                "Integrated the drowsiness detection system with an in-car camera to continuously monitor the driver's state and provide timely alerts.",
                "Improved system reliability by implementing techniques to handle various lighting conditions and driver appearance changes.",
                "Developed a user-friendly interface for system configuration and monitoring, allowing for easy customisation and accessibility."
            ]
        }
    ];

    return (
        <div id="Experience" className="w-full lg:w-3/4 mx-auto py-16 px-4 sm:px-8">
            <div className="header text-center pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-2 border-blue-500 inline-block pb-2 mt-10 md:mt-20">EXPERIENCE</h1>
            </div>

            <div className="experience-timeline space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-blue-500"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                                <p className="text-gray-600 mb-2">{exp.location}</p>
                            </div>
                            <div className="text-sm md:text-base font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start md:self-center">
                                {exp.duration}
                            </div>
                        </div>
                        
                        <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                                <motion.li
                                    key={respIndex}
                                    className="flex items-start text-gray-700"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: (index * 0.1) + (respIndex * 0.05) }}
                                >
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    <span className="text-sm md:text-base leading-relaxed">{responsibility}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
