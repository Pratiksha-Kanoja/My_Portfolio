import React, { useState, useEffect } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTypingEffect from 'react-typing-effect';
import { IoMenu } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const Homepage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='home'>
            {/* Navbar container that changes background on scroll */}
            <div className={`navbar-container w-full fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white border' : 'bg-transparent'}`}>
                <div className="navbar w-5/6 flex justify-between mx-auto h-[50px] mt-[30px] font-sans">
                    <div className="nav-left flex items-center -mt-5">
                        <p className={`font-bold text-[20px] ${isScrolled ? 'text-black' : 'text-white'}`}>Pratiksha Kanoja</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex nav-right justify-between w-1/2 px-5 font-bold">
                        <AnchorLink href="#home" className={`${isScrolled ? 'text-black' : 'text-white'}`}>HOME</AnchorLink>
                        <AnchorLink href="#About" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>ABOUT</AnchorLink>
                        <AnchorLink href="#Experience" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>EXPERIENCE</AnchorLink>
                        <AnchorLink href="#Skills" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>SKILLS</AnchorLink>
                        <AnchorLink href="#project_container" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>PROJECTS</AnchorLink>
                        <AnchorLink href="#contact_container" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>CONTACT</AnchorLink>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <IoMenu
                            className={`text-3xl cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className={`absolute top-full w-full bg-white py-4 shadow-lg z-50 md:hidden`}>
                        <div className="flex flex-col items-center font-bold">
                            <AnchorLink href="#home" className="text-black py-2" onClick={() => setMenuOpen(false)}>HOME</AnchorLink>
                            <AnchorLink href="#about" className="text-black py-2" onClick={() => setMenuOpen(false)}>ABOUT</AnchorLink>
                            <AnchorLink href="#Experience" className="text-black py-2" onClick={() => setMenuOpen(false)}>EXPERIENCE</AnchorLink>
                            <AnchorLink href="#Skills" className="text-black py-2" onClick={() => setMenuOpen(false)}>SKILLS</AnchorLink>
                            <AnchorLink href="#project_container" className="text-black py-2" onClick={() => setMenuOpen(false)}>PROJECTS</AnchorLink>
                            <AnchorLink href="#contact_container" className="text-black py-2" onClick={() => setMenuOpen(false)}>CONTACT</AnchorLink>
                        </div>
                    </div>
                )}
            </div>

            {/* Main section with fixed background image, typing effect, and floating visuals */}
            <div
                className="HomeBackground relative bg-cover bg-center flex justify-center items-center px-4"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/website-full-stack-developer-vector-style-illustration-art-wallpaper-background_987764-23171.jpg)",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Floating decorative shapes/images */}
                <motion.img
                    src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg"
                    alt="React"
                    className="hidden md:block absolute w-12 h-12 top-24 left-10 opacity-80"
                    animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                <motion.div
                    className="hidden md:block absolute -bottom-6 left-1/3 w-24 h-24 rounded-full bg-blue-500/40 blur-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="Home w-full md:w-5/6 text-center relative z-10 text-white h-[75vh] sm:h-[80vh] md:h-[100vh] pt-[100px] md:pt-[200px]">
                    <motion.h1
                        className="text-[36px] sm:text-[48px] md:text-[74px] font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Hie, There!
                    </motion.h1>
                    <motion.h1
                        className="text-[36px] sm:text-[48px] md:text-[74px] font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        I'm Pratiksha Kanoja
                    </motion.h1>
                    <motion.h3
                        className="text-[24px] sm:text-[30px] md:text-[44px] font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <ReactTypingEffect
                            text={["Full Stack Web Developer", "JavaScript Enthusiast", "React Expert", "Node.js Developer"]}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                        />
                    </motion.h3>
                </div>
            </div>

            {/* Tech marquee */}
            {/* <div className="bg-white py-4">
                <Marquee gradient={false} speed={50} pauseOnHover={true} className="[&>div]:flex [&>div]:items-center">
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg" alt="JavaScript" className="h-10 mx-10 opacity-80" />
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg" alt="React" className="h-10 mx-10 opacity-80" />
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/node-dot-js.svg" alt="Node.js" className="h-10 mx-10 opacity-80" />
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg" alt="MongoDB" className="h-10 mx-10 opacity-80" />
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg" alt="Tailwind" className="h-10 mx-10 opacity-80" />
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg" alt="Git" className="h-10 mx-10 opacity-80" />
                </Marquee>
            </div> */}


            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <About />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
                <Experience />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
                <Skills />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
                <Projects />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
                <Contact />
            </motion.div>
        </div>
    );
}

export default Homepage;
