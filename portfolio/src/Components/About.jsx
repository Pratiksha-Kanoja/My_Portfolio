import React from 'react';
import { motion } from 'framer-motion';
import image from '../Img/1736018654489.jpeg';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div id="About" className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-11/12 md:w-4/5 mx-auto">
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                <img 
                  src={image} 
                  alt="Pratiksha Kanoja" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white" 
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Available for Work
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
                  About Me
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
              </motion.div>

              <motion.p 
                className="text-gray-600 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Full-stack Software Developer with 2+ year of experience building scalable SaaS and AI-powered web applications using React, Node.js, and modern cloud databases, with a proven ability to deliver end-to-end products and optimize performance.
              </motion.p>

              {/* Personal Info Cards */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="font-semibold text-gray-800">Pratiksha Kanoja</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Role</p>
                  <p className="font-semibold text-gray-800">Full Stack Developer</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-gray-800 text-sm">pratiksha.kanoja2001@gmail.com</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold text-gray-800">+91 9834756167</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a href="https://drive.google.com/file/d/1a2bZwY9o-T1uwn-vnsBXD0-7lW5dTAoa/view?usp=sharing" className="inline-block">
                  <motion.button 
                    className="bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="group-hover:animate-bounce" />
                    Download Resume
                  </motion.button>
                </a>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a 
                  href="https://github.com/Pratiksha-Kanoja" 
                  className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/pratiksha-kanoja-795b2b1a5/" 
                  className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
                </motion.a>
                <motion.a 
                  href="https://x.com/KanojaPratu0109" 
                  className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaXTwitter className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;