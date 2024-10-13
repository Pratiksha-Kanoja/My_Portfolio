import React from 'react';
import image from '../Img/image.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div id="About" className="w-11/12 md:w-3/4 mx-auto flex flex-col md:flex-row justify-evenly mt-8 md:mt-[50px] shadow-md p-4 md:p-8">
      <div className="about-left flex flex-col md:flex-row justify-between w-full md:w-[46%] mt-4 md:mt-[80px]">
        <div className="w-full md:w-[36%] mx-auto md:mx-0 mb-4 md:mb-0">
          <img src={image} alt="Pratiksha Kanoja" className="w-full h-auto md:h-[200px] object-cover" />
        </div>
        <div className="w-full md:w-[59%] mt-4 md:mt-0 mx-auto md:mx-0 text-center md:text-left">
          <p className="mt-2 mb-3 text-base md:text-lg"><b>Name:</b> Pratiksha Kanoja</p>
          <p className="mb-3 text-base md:text-lg"><b>Profile:</b> Full Stack Web Developer</p>
          <p className="mb-3 text-base md:text-lg"><b>Email:</b> <br />pratiksha.kanoja2001@gmail.com</p>
          <p className="text-base md:text-lg"><b>Phone:</b> +91 9834756167</p>
        </div>
      </div>
      
      <div className="about-right w-full md:w-[46%] mt-8 md:mt-[80px] text-center md:text-left">
        <div>
          <h1 className="border-b-2 border-blue-500 w-[150px] pb-2 font-bold text-xl md:text-2xl mx-auto md:mx-0">About me</h1>
          <p className="text-[#8988a9] text-base md:text-lg mt-6">
            A passionate Full Stack web Developer 🚀 having experience in building Web applications with JavaScript, ReactJs, Node.js, MongoDB, and other libraries and frameworks.
          </p>
          <a href="https://drive.google.com/file/d/1aoDV-ihhcscT6lvB8wjP3nH-_yc9rR9h/view?usp=sharing" className="inline-block mt-6">
            <button className="resume bg-blue-500 text-white h-10 w-[150px] text-lg hover:bg-blue-600 transition-colors duration-200">
              Resume
            </button>
          </a>
          
          <div className="icons flex justify-center md:justify-start gap-4 p-2 mt-5">
            <a href="https://github.com/Pratiksha-Kanoja" className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
              <FaGithub className="text-[24px] md:text-[30px]" />
            </a>
            <a href="https://www.linkedin.com/in/pratiksha-kanoja-795b2b1a5/" className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
              <FaLinkedin className="text-[24px] md:text-[30px]" />
            </a>
            <a href="https://x.com/KanojaPratu0109" className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
              <FaXTwitter className="text-[24px] md:text-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;