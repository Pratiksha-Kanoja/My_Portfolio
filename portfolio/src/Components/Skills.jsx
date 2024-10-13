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

const skillsData = [
    {
        image: 'https://img.freepik.com/free-icon/html-5_318-566077.jpg',
        alt: 'HTML',
        name: 'HTML'
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
        alt: 'CSS',
        name: 'CSS'
    },
    {
        image: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
        alt: 'JavaScript',
        name: 'JAVASCRIPT'
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        alt: 'React',
        name: 'REACT'
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
        alt: 'Node.js',
        name: 'NODE.JS'
    },
    {
        image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        alt: 'MongoDB',
        name: 'MONGODB'
    },
    {
        image: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png',
        alt: 'Next.js',
        name: 'NEXT.JS'
    }
];

const Skills = () => {
    return (
        <div id="Skills" className="w-full lg:w-3/4 mx-auto py-16 px-4 sm:px-8">
            <div className="header text-center pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-2 border-blue-500 inline-block pb-2 mt-10 md:mt-20">SKILLS</h1>
            </div>

            <div className="img-skills grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-around gap-8">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[45%] md:w-[30%] mb-12 h-[250px] md:h-[300px] bg-white rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl flex flex-col items-center"
                    >
                        <div className="h-[100px] md:h-[150px] w-1/2 mt-6 md:mt-10 mx-auto">
                            <img src={skill.image} alt={skill.alt} className="w-full h-full object-fill" />
                        </div>
                        <div className="skills-name mt-6 md:mt-8 text-center">
                            <h2 className="text-lg md:text-xl font-bold">{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
