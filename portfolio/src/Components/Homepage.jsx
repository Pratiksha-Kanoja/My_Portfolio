import React, { useState, useEffect } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTypingEffect from 'react-typing-effect';
import { IoMenu } from 'react-icons/io5';

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
                    <div className="hidden md:flex nav-right flex justify-between w-1/2 px-5 font-bold">
                        <AnchorLink href="#home" className={`${isScrolled ? 'text-black' : 'text-white'}`}>HOME</AnchorLink>
                        <AnchorLink href="#About" className={`no-underline ${isScrolled ? 'text-black' : 'text-white'}`}>ABOUT</AnchorLink>
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
                            <AnchorLink href="#Skills" className="text-black py-2" onClick={() => setMenuOpen(false)}>SKILLS</AnchorLink>
                            <AnchorLink href="#project_container" className="text-black py-2" onClick={() => setMenuOpen(false)}>PROJECTS</AnchorLink>
                            <AnchorLink href="#contact_container" className="text-black py-2" onClick={() => setMenuOpen(false)}>CONTACT</AnchorLink>
                        </div>
                    </div>
                )}
            </div>

            {/* Main section with fixed background image and typing effect */}
            <div
                className="HomeBackground relative bg-cover bg-center flex justify-around items-center px-4"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/website-full-stack-developer-vector-style-illustration-art-wallpaper-background_987764-23171.jpg)",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
                {/* Use responsive height classes */}
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <div className="Home w-full md:w-5/6 text-center relative z-10 text-white h-[75vh] sm:h-[80vh] md:h-[100vh] pt-[100px] md:pt-[200px]">
                    <h1 className="text-[36px] sm:text-[48px] md:text-[74px] font-bold">Hie, There!</h1>
                    <h1 className="text-[36px] sm:text-[48px] md:text-[74px] font-bold">I'm Pratiksha Kanoja</h1>
                    <h3 className="text-[24px] sm:text-[30px] md:text-[44px] font-semibold">
                        <ReactTypingEffect
                            text={["Full Stack Web Developer", "JavaScript Enthusiast", "React Expert", "Node.js Developer"]}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            typingDelay={500}
                        />
                    </h3>
                </div>
            </div>


            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Homepage;
