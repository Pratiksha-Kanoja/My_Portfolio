import React from 'react'
import './Homepage.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Homepage = () => {
  return (
    <div className='Homepage_container'>
        <div className="navbar">
            <div className="nav-left">
                <h2>Pratiksha Kanoja</h2>
            </div>
            <div className="nav-right">
            
                <div>HOME</div>
                <AnchorLink href="#About" style={{color:"black",textDecoration:"none"}}><div>ABOUT</div></AnchorLink>
                <AnchorLink href="#Skills" style={{color:"black",textDecoration:"none"}}><div>SKILLS</div></AnchorLink>
                <AnchorLink href="#project_container" style={{color:"black",textDecoration:"none"}}><div>PROJECTS</div></AnchorLink>
                <AnchorLink href="#contact_container" style={{color:"black",textDecoration:"none"}}><div>CONTACT</div></AnchorLink>
            </div>
        </div>

        <div className="HomeBackground">
            <div className="Home">
                <div>
                    <h1>Hie,There!</h1>
                    <h1>I'm Pratiksha Kanoja</h1>
                    <h3>Full stack developer</h3>
                </div>
            </div>
        </div>

        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

    </div>
  )
}

export default Homepage