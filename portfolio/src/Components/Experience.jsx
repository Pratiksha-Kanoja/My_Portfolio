import React from 'react';
import { motion } from 'framer-motion';
import FasterInvitesLogo from '../Img/Faster_invites.png';

const Experience = () => {
    const experiences = [
        {
            company: "IndianAppGuy Tech PVT LTD",
            location: "Bangalore, India · Remote",
            roles: [
                {
                    title: "Software Developer",
                    duration: "Oct 2024 - Present · 1 yr 5 mos",
                    type: "Full-time",
                    responsibilities: [
                        "Developed and maintained SaaS platforms (MagicSlides – 1M+ users, MagicForm, AskVideo,TalkingPDF, SheetAI), improving performance and scalability.",
                        "Integrated AI providers (OpenAI GPT, Gemini, DeepSeek, OpenRouter, xAI, ZAI) to enable smart content and PPT generation across products.",
                        "Implemented secure authentication and role-based authorization systems across all platforms.",
                        "Integrated Stripe for MagicSlides Essential Plan subscriptions, increasing conversion by 30%.",
                        "Built MagicSlides GPT, MCP tool, and MagicForm Chrome Extension to let users generate PPTs anywhere, improving automation accuracy and productivity.",
                        "Optimized MagicSlides add-on PPT generation flow, enabling 30 slides to be generated in under 30 seconds.",
                        "Implemented custom formula engine for SheetAI to support advanced spreadsheet intelligence.",
                        "Improved SEO rankings by optimizing metadata (titles, keywords, descriptions) and submitting pages for search re-crawling."
                    ]
                },
                {
                    title: "Fullstack Development Intern",
                    duration: "Feb 2024 - Oct 2024 · 8 mos",
                    type: "Internship",
                    responsibilities: [
                        "Developed presentations for the MagicSlides app using pptxgenjs, Google Apps Script, and jsPDF.",
                        "Wrote custom prompts for slide content generation, ensuring dynamic and user-specific slide creation.",
                        "Created a file compression tool to optimize storage and upload efficiency for the MagicSlides app.",
                        "Developed a Google Doc URL to PPTX converter to streamline document-to-presentation workflows within MagicSlides.",
                        "Developed a text to PPTX converter, enabling seamless text input to presentation slide creation for MagicSlides."
                    ]
                }
            ]
        },
         {
            company: "FasterInvites",
            location: "Bangalore, India",
            website: "https://fasterinvites.com",
            logo: FasterInvitesLogo,
            roles: [
                {
                    title: "Founder & Full-Stack Developer",
                    duration: "Dec 2025 - Present",
                    type: "Full-time",
                    responsibilities: [
                        "Built and launched an online invitation card platform enabling users to create and customize digital invites, achieving 500+ search impressions and ~30 organic clicks in the first month.",
                        "Designed and developed full-stack architecture including UI, backend APIs, and database.",
                        "Implemented responsive design, template customization, and real-time preview features.",
                        "Deployed and maintained production environment, domain setup, and hosting.",
                        "Implemented SEO strategies including metadata optimization, sitemap generation, and search indexing to improve visibility.",
                        "Created and managed blog content to drive organic traffic and user engagement.",
                        "Managed end-to-end lifecycle including design, development, testing, and launch."
                    ]
                }
            ]
        }
    ];

    return (
        <div id="Experience" className="w-full lg:w-3/4 mx-auto py-16 px-4 sm:px-8 bg-gray-50/50">
            <div className="header text-center pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-2 border-blue-500 inline-block pb-2 mt-10 md:mt-20">EXPERIENCE</h1>
            </div>

            <div className="experience-timeline space-y-12">
                {experiences.map((companyGroup, companyIndex) => (
                    <motion.div
                        key={companyIndex}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-10 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
                    >
                        {/* Company Header */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
                                {companyGroup.logo ? (
                                    <img 
                                        src={companyGroup.logo} 
                                        alt={companyGroup.company} 
                                        className="w-full h-full object-contain p-1.5"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <span className={`text-gray-400 font-bold text-xl md:text-2xl ${companyGroup.logo ? 'hidden' : 'block'}`}>
                                    {companyGroup.company[0]}
                                </span>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900">{companyGroup.company}</h2>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <p className="text-gray-500 font-medium text-sm md:text-base">{companyGroup.location}</p>
                                    {companyGroup.website && (
                                        <>
                                            <span className="text-gray-300 hidden md:inline">|</span>
                                            <a 
                                                href={companyGroup.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline text-sm md:text-base font-medium"
                                            >
                                                Website
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Roles */}
                        <div className="relative pl-4 md:pl-8 space-y-10">
                            {/* Vertical Line for multiple roles */}
                            {companyGroup.roles.length > 1 && (
                                <div className="absolute left-[-2px] md:left-[5px] top-2 bottom-8 w-[2px] bg-gray-200"></div>
                            )}

                            {companyGroup.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="relative">
                                    {/* Dot */}
                                    <div className={`absolute left-[-26px] md:left-[-31px] top-2 w-3 h-3 rounded-full border-2 bg-white ${roleIndex === 0 ? 'border-gray-400' : 'border-gray-300'}`}></div>

                                    <div className="mb-4">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{role.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm font-semibold text-gray-600">{role.type}</span>
                                            <span className="text-gray-300">•</span>
                                            <span className="text-sm font-medium text-gray-500">{role.duration}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {role.responsibilities.map((responsibility, respIndex) => (
                                            <motion.li
                                                key={respIndex}
                                                className="flex items-start text-gray-700"
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: (companyIndex * 0.1) + (roleIndex * 0.1) + (respIndex * 0.05) }}
                                            >
                                                <span className="text-blue-500 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span className="text-sm md:text-base leading-relaxed">{responsibility}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
