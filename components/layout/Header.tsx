"use client"; 
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

type Props = {
  gmail: string;
};

const Header: React.FC<Props> = ({ gmail }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
          </a>
        </div>
        <div className="hidden md:block">
          <span className="text-sm bg-gray-900 px-3 py-1 rounded">
            {gmail}
          </span>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-3 flex flex-col space-y-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaGithub className="w-5 h-5 mr-2" /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
          </a>
          <span className="text-sm bg-gray-900 px-3 py-1 rounded self-start">
            {gmail}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
