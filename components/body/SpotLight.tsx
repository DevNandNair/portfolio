"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function SpotLight() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Animated gradient orbs background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div aria-hidden="true" className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <motion.div 
            className="flex flex-col space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 self-center lg:self-start"
            >
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-gray-400">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dev Nand Nair
                </span>
              </motion.h1>

              {/* Typing animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    2200,
                    "MERN Stack Developer",
                    2200
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-gray-400 text-lg md:text-xl max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I build interactive UIs, modern web applications, and craft engaging user experiences with cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* <a
                href="#projects"
                className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" size={14} />
              </a> */}
              <a
                href="mailto:devnandnair2@gmail.com"
                className="px-8 py-3.5 rounded-full bg-gray-800/50 text-white font-semibold border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaEnvelope size={16} />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="https://github.com/DevNandNair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dev-nand-nair-874665283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
            
            {/* Image container */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Image wrapper */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border-4 border-gray-800 bg-gradient-to-br from-gray-900 to-black">
                {/* Replace with your actual image */}
                <Image 
                  src="/6efcaba7-bb72-41c7-ae19-a759279a0ea6.jpg" // REPLACE THIS WITH YOUR IMAGE PATH
                  alt="Dev Nand Nair"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/50"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/50"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <FaArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}