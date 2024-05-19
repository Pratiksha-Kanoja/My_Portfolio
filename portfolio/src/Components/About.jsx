import React from 'react'
import image from '../Img/image.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Homepage.css'

const About = () => {
  return (
    <div id="About">

            <div className="about-left">
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <p><b>Name:</b>Pratiksha Kanoja</p>
                    <p><b>Profile:</b>Full Stack Developer</p>
                    <p><b>Email:<br/></b>pratiksha.kanoja2001@gmail.com</p>
                    <p><b>Phone:</b>+91 9834756167</p>
                </div>
            </div>

            <div className="about-right">
                <div>
                    <h1>About me</h1>
                    <p>A passionate Full Stack web Developer 🚀 having an experience of building Web applications with
                        JavaScript / ReactJs / Node.js / MongoDB and some other libraries and frameworks</p>
                    <a href="https://drive.google.com/file/d/1QLu9pUGh78VH9nKg1Kw3YqFrIChbmWdY/view?usp=sharing"><button className='resume'>Resume</button></a>

                    <div className="icons">
                        <a href="https://github.com/Pratiksha-Kanoja">
                            <FaGithub style={{fontSize:"30px",color:"black"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/pratiksha-kanoja-795b2b1a5/">
                            <FaLinkedin style={{fontSize:"30px",color:"black"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About