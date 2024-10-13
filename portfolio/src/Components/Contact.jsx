import React from 'react';
import { IoCallOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <div
            id='contact_container'
            className="w-full py-[100px] mt-[50px] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://png.pngtree.com/background/20210709/original/pngtree-sexual-cold-wind-simple-black-and-white-ash-geometric-picture-image_917280.jpg)",
            }}
        >
            <div className="w-11/12 md:w-3/4 h-auto md:h-[500px] mx-auto bg-white text-black p-8 md:p-12">
                <p className="text-center text-[30px] md:text-[40px] border-b-2 border-blue-500 pb-2 w-full md:w-[230px] mx-auto mb-8">
                    Get in Touch
                </p>
                <div className="Detailcontact w-full md:w-2/3 lg:w-1/3 mx-auto text-center">
                    <div className="flex flex-col md:flex-row items-center md:items-center mt-5 text-lg">
                        <IoLocationSharp className="mr-0 md:mr-3 mb-2 md:mb-0 text-blue-500" />
                        <p className="text-center md:text-left">Thane, Maharashtra, India</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-center mt-5 text-lg">
                        <IoCallOutline className="mr-0 md:mr-3 mb-2 md:mb-0 text-blue-500" />
                        <p className="text-center md:text-left">+91 9834756167</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-center mt-5 text-lg">
                        <div className="text-blue-500">
                            <IoMail className="mr-0 md:mr-3 mb-2 md:mb-0 text-blue-500" />
                        </div>
                        <p className="text-center md:text-left">pratiksha.kanoja2001@gmail.com</p>
                    </div>


                    <a href="https://drive.google.com/file/d/1aoDV-ihhcscT6lvB8wjP3nH-_yc9rR9h/view?usp=sharing">
                        <button className="resume mt-8 bg-blue-500 text-white border-none rounded-none h-10 w-full md:w-[150px] text-lg">
                            Resume
                        </button>
                    </a>

                    <div className="icons flex justify-center space-x-4 md:space-x-6 mx-auto p-2 mt-5">
                        <a
                            href="https://github.com/Pratiksha-Kanoja"
                            className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200"
                        >
                            <FaGithub className="text-[25px] md:text-[30px]" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pratiksha-kanoja-795b2b1a5/"
                            className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200"
                        >
                            <FaLinkedin className="text-[25px] md:text-[30px]" />
                        </a>
                        <a
                            href="https://x.com/KanojaPratu0109"
                            className="border-2 border-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-200"
                        >
                            <FaXTwitter className="text-[25px] md:text-[30px]" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
