"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaBootstrap, FaPython, FaCss3Alt, FaHtml5, FaLinux, FaGitAlt, FaGithub, FaChevronLeft, FaChevronRight, FaPause, FaPlay,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiDjango, SiFlutter, SiMysql, SiJavascript, SiTypescript,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactElement;
  category: string;
};

const techs: Tech[] = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" size={32} />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={32} />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" size={32} />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" size={32} />, category: "Language" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" size={32} />, category: "Language" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" size={32} />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={32} />, category: "Backend" },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-500" size={32} />, category: "Backend" },
  { name: "Django", icon: <SiDjango className="text-green-700" size={32} />, category: "Backend" },
  { name: "Flutter", icon: <SiFlutter className="text-blue-500" size={32} />, category: "Mobile" },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={32} />, category: "Database" },
  { name: "Python", icon: <FaPython className="text-yellow-400" size={32} />, category: "Language" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={32} />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" size={32} />, category: "Frontend" },
  // { name: "Linux", icon: <FaLinux className="text-gray-400" size={32} />, category: "DevOps" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" size={32} />, category: "DevOps" },
  { name: "GitHub", icon: <FaGithub className="text-white" size={32} />, category: "DevOps" },
];

const Technologies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(techs.length / itemsPerPage);

  // Auto-play functionality
  // useEffect(() => {
  //   if (isPlaying) {
  //     intervalRef.current = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % totalPages);
  //     }, 3000);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [isPlaying, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

  const getCurrentPageTechs = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return techs.slice(start, end);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-5 md:py-10 bg-gradient-to-b  from-black via-gray-950 to-black overflow-hidden">
      
      {/* Animated gradient orbs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Technologies & Tools
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="group-hover:text-cyan-400 transition-colors" size={18} />
          </button> */}

          {/* <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
            aria-label="Next slide"
          >
            <FaChevronRight className="group-hover:text-cyan-400 transition-colors" size={18} />
          </button> */}

          {/* Tech Cards Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
              >
                {getCurrentPageTechs().map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-2xl blur-xl transition-all duration-500" />
                    
                    {/* Card */}
                    <div className="relative flex flex-col items-center space-y-3 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                      
                      {/* Icon container */}
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-750 group-hover:to-gray-850 transition-all duration-300">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>
                      </div>
                      
                      {/* Tech name */}
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col items-center gap-6">
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-400'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          {/* <button
            onClick={togglePlayPause}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
          >
            {isPlaying ? (
              <FaPause size={16} className="text-cyan-400" />
            ) : (
              <FaPlay size={16} className="text-cyan-400" />
            )}
            <span className="text-sm text-gray-400 group-hover:text-gray-300">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </button> */}
        </div>

        {/* Bottom decoration */}
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700" />
            <span>Constantly learning and evolving</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Technologies;