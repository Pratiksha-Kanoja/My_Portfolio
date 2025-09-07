// import React from 'react';

// const skillsData = [
//     {
//         image: 'https://img.freepik.com/free-icon/html-5_318-566077.jpg',
//         alt: 'HTML',
//         name: 'HTML'
//     },
//     {
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
//         alt: 'CSS',
//         name: 'CSS'
//     },
//     {
//         image: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
//         alt: 'JavaScript',
//         name: 'JAVASCRIPT'
//     },
//     {
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
//         alt: 'React',
//         name: 'REACT'
//     },
//     {
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
//         alt: 'Node.js',
//         name: 'NODE.JS'
//     },
//     {
//         image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
//         alt: 'MongoDB',
//         name: 'MONGODB'
//     },
//     {
//         image: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png',
//         alt: 'MongoDB',
//         name: 'MONGODB'
//     }
// ];

// const Skills = () => {
//     return (
//         <div id="Skills" className="w-3/4 mx-auto py-16">
//             <div className="header text-center pb-16">
//                 <h1 className="text-5xl font-bold border-b-2 border-blue-500 inline-block pb-2 mt-20">SKILLS</h1>
//             </div>

//             <div className="img-skills flex flex-wrap justify-around gap-8">
//                 {skillsData.map((skill, index) => (
//                     <div
//                         key={index}
//                         className="w-[30%] mb-12 h-[300px] bg-white rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center"
//                     >
//                         <div className="h-[150px] w-1/2 mt-10 mx-auto">
//                             <img src={skill.image} alt={skill.alt} className="w-full h-full object-fill" />
//                         </div>
//                         <div className="skills-name mt-8 text-center">
//                             <h2 className="text-xl font-bold">{skill.name}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Skills;


import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/html5.svg',
        alt: 'HTML5',
        name: 'HTML5',
        color: 'from-orange-400 to-orange-600',
        level: 'Expert'
    },
    {
        image: 'https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg',
        alt: 'CSS3',
        name: 'CSS3',
        color: 'from-blue-400 to-blue-600',
        level: 'Expert'
    },
    {
        image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg',
        alt: 'JavaScript',
        name: 'JavaScript',
        color: 'from-yellow-400 to-yellow-600',
        level: 'Expert'
    },
    {
        image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg',
        alt: 'React',
        name: 'React.js',
        color: 'from-cyan-400 to-cyan-600',
        level: 'Expert'
    },
    {
        image: 'https://e7.pngegg.com/pngimages/240/632/png-clipart-deploying-node-js-website-development-javascript-web-application-vue-js-text-rectangle-thumbnail.png',
        alt: 'Node.js',
        name: 'Node.js',
        color: 'from-green-400 to-green-600',
        level: 'Expert'
    },
    {
        image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg',
        alt: 'MongoDB',
        name: 'MongoDB',
        color: 'from-emerald-400 to-emerald-600',
        level: 'Advanced'
    },
    {
        image: 'https://img.icons8.com/fluent-systems-filled/512/nextjs.png',
        alt: 'Next.js',
        name: 'Next.js',
        color: 'from-gray-400 to-gray-600',
        level: 'Expert'
    },
    {
        image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg',
        alt: 'Tailwind CSS',
        name: 'Tailwind CSS',
        color: 'from-teal-400 to-teal-600',
        level: 'Expert'
    }
];

const Skills = () => {
    return (
        <div id="Skills" className="w-full py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
                        Skills & Technologies
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 h-40 flex flex-col items-center justify-center relative overflow-hidden"
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                
                                {/* Skill icon */}
                                <div className="relative z-10 mb-3">
                                    <img 
                                        src={skill.image} 
                                        alt={skill.alt} 
                                        className="w-12 h-12 md:w-16 md:h-16 object-contain filter group-hover:scale-110 transition-transform duration-300" 
                                    />
                                </div>
                                
                                {/* Skill name */}
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center mb-1">
                                    {skill.name}
                                </h3>
                                
                                {/* Skill level */}
                                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium`}>
                                    {skill.level}
                                </span>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Skills</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Git & GitHub', 'RESTful APIs', 'Express.js', 'PostgreSQL', 'Firebase', 'VS Code', 'Postman'].map((skill, index) => (
                            <motion.span
                                key={index}
                                className="bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
