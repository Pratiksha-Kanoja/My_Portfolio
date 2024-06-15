import React from 'react'
import { IoCallOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Homepage.css'

const Contact = () => {
    return (
        <div id='contact_container'>
            <div>
                <p>Get in Touch</p>
                <div className='Detailcontact'>
                    <div>
                        <IoLocationSharp />
                        <p>Palghar,Maharashtra,India</p>
                    </div>
                    <div>
                        <IoCallOutline />
                        <p>+91 9834756167</p>
                    </div>
                    <div>
                        <IoMail />
                        <p>pratiksha.kanoja2001@gmail.com</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1aoDV-ihhcscT6lvB8wjP3nH-_yc9rR9h/view?usp=share_link"><button className='resume'>Resume</button></a>

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

export default Contact