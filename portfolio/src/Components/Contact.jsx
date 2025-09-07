import React from 'react';
import { motion } from 'framer-motion';
import { IoCallOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    const contactInfo = [
        {
            icon: IoLocationSharp,
            label: "Location",
            value: "Thane, Maharashtra, India",
            color: "from-green-400 to-green-600"
        },
        {
            icon: IoCallOutline,
            label: "Phone",
            value: "+91 9834756167",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: IoMail,
            label: "Email",
            value: "pratiksha.kanoja2001@gmail.com",
            color: "from-purple-400 to-purple-600"
        }
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/Pratiksha-Kanoja",
            label: "GitHub",
            color: "from-gray-600 to-gray-800"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/pratiksha-kanoja-795b2b1a5/",
            label: "LinkedIn",
            color: "from-blue-600 to-blue-800"
        },
        {
            icon: FaXTwitter,
            href: "https://x.com/KanojaPratu0109",
            label: "Twitter",
            color: "from-gray-600 to-gray-800"
        }
    ];

    return (
        <div id='contact_container' className="w-full py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
            </div>

            <div className="w-11/12 md:w-4/5 mx-auto relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Work Together
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your next project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} shadow-lg`}>
                                        <info.icon className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                                        <p className="text-white font-semibold">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resume Download */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <a href="https://drive.google.com/file/d/1cP03A3U19M7G_RlOUsNwWdAg7U1URthu/view?usp=sharing">
                                <motion.button 
                                    className="w-full bg-gradient-to-r from-gray-700 to-black text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaDownload className="text-lg" />
                                    Download Resume
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Social Links & CTA */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Me</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <social.icon className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{social.label}</p>
                                            <p className="text-gray-400 text-sm">Follow me on {social.label}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="text-center p-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
                            <p className="text-gray-300 mb-6">
                                Let's discuss how we can work together to bring your vision to life.
                            </p>
                            <motion.a
                                href="mailto:pratiksha.kanoja2001@gmail.com"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IoMail />
                                Send Email
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div >
            
    );
};

export default Contact;
