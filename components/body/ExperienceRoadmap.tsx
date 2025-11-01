"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

type Experience = {
  id: number;
  type: "work" | "education" | "project";
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: React.ReactElement;
  color: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Front-End Developer",
    organization: "WoodenClouds IT and Services",
    location: "Hybrid",
    duration: "Oct 2024 – Sep 2025",
    description: [
      "Working on client and in-house projects using React.js and Next.js",
      "Built responsive UI with Tailwind CSS following modern design standards",
      "Collaborated with backend developers to integrate RESTful APIs",
      "Maintained version control and CI workflows using Git and GitHub"
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Git"],
    icon: <FaBriefcase size={20} />,
    color: "cyan"
  },
 
  {
    id: 3,
    type: "work",
    title: "Full Stack Developer Intern",
    organization: "Logix Space Technologies Pvt Ltd",
    location: "Remote",
    duration: "Dec 2023 – Apr 2024",
    description: [
      "Contributed to the LMS web app using React.js and Bootstrap",
      "Created APIs with Node.js and Express, and handled MySQL integration",
      "Built a companion mobile app using Flutter",
      "Used JIRA for smooth workflow management"
    ],
    technologies: ["React.js", "Node.js", "Express", "MySQL", "Flutter"],
    icon: <FaBriefcase size={20} />,
    color: "cyan"
  },
  {
  id: 4,
  type: "project",
  title: "Full-Stack CRUD Applications",
  organization: "Personal Projects",
  location: "React + Django + MongoDB",
  duration: "2023",
  description: [
    "Developed 14+ CRUD applications covering various domains and use cases",
    "Built with React frontend, Django backend, and MongoDB databases",
    "Implemented core features including Create, Read, Update, and Delete operations with form validation",
    "Designed responsive user interfaces using Bootstrap framework"
  ],
  technologies: ["React", "Django", "MongoDB",  "Bootstrap", "Python"],
  icon: <FaCode size={20} />,
  color: "pink"
},
  {
    id: 6,
    type: "project",
    title: "Anime Recommendation System",
    organization: "Personal Project",
    location: "ML + Web",
    duration: "2023",
    description: [
      "Built a content-based recommendation engine using Python",
      "Deployed with Django backend and custom frontend",
      "Implemented machine learning algorithms for personalized suggestions"
    ],
    technologies: ["Python", "Machine Learning", "Django"],
    icon: <FaCode size={20} />,
    color: "pink"
  },
  {
    id: 4,
    type: "project",
    title: "Confera - Conference Booking System",
    organization: "Personal Project",
    location: "Django",
    duration: "2022",
    description: [
      "Developed a scheduling system for booking conference halls",
      "Implemented admin controls, attendee management, and slot automation",
      "Built comprehensive backend with Django framework"
    ],
    technologies: ["Django", "Python", "PostgreSQL"],
    icon: <FaCode size={20} />,
    color: "pink"
  },
   {
    id: 2,
    type: "education",
    title: "MCA - Masters in Computer Applications",
    organization: "Marian College, Kuttikkanam",
    location: "Kerala, India",
    duration: "2022 – 2024",
    description: [
      "Graduated with 73% GPA",
      "Specialized in advanced software development and system design",
      "Completed multiple full-stack projects and research work"
    ],
    technologies: ["Software Engineering", "Data Structures", "Web Development"],
    icon: <FaGraduationCap size={20} />,
    color: "purple"
  },
  {
    id: 5,
    type: "education",
    title: "BCA - Bachelors in Computer Applications",
    organization: "Catholicate College, Pathanamthitta",
    location: "Kerala, India",
    duration: "2019 – 2022",
    description: [
      "Graduated with 60% GPA",
      "Foundation in programming, databases, and web technologies",
      "Active participant in coding competitions and tech events"
    ],
    technologies: ["Programming Fundamentals", "DBMS", "Web Technologies"],
    icon: <FaGraduationCap size={20} />,
    color: "purple"
  },
  
];

const ExperienceRoadmap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education" | "project">("all");

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      cyan: {
        bg: "from-cyan-500/10 to-blue-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/20"
      },
      purple: {
        bg: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        glow: "shadow-purple-500/20"
      },
      pink: {
        bg: "from-pink-500/10 to-rose-500/10",
        border: "border-pink-500/30",
        text: "text-pink-400",
        glow: "shadow-pink-500/20"
      }
    };
    return colors[color];
  };

  return (
    <section className="relative py-10 md:py-20 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      
      {/* Animated gradient orbs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              Professional Journey
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Experience Roadmap
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { value: "all", label: "All" },
            { value: "work", label: "Work" },
            { value: "education", label: "Education" },
            { value: "project", label: "Projects" }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as typeof activeTab)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600 hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} flex items-center justify-center z-10 shadow-lg ${colors.glow}`}>
                    <span className={colors.text}>{exp.icon}</span>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-[calc(50%-4rem)] ml-20 md:ml-0 group`}
                  >
                    <div className={`relative p-6 rounded-2xl border ${colors.border} bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-xl ${colors.glow} transition-all duration-300`}>
                      
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className={`text-xl font-bold ${colors.text}`}>
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 text-gray-100 rounded-full text-xs font-medium bg-gradient-to-r ${colors.bg} ${colors.border} border`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-gray-300 font-semibold mb-1">{exp.organization}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt size={12} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt size={12} />
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className={`${colors.text} mt-1.5`}>•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.bg} opacity-20 blur-2xl rounded-full`} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
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
            <span>Committed to continuous growth and innovation</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceRoadmap;