import React from 'react';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="#home" onClick={() => setActiveSection('home')} className="text-white hover:text-teal-400 transition duration-300">Home</a>
        <a href="#about" onClick={() => setActiveSection('about')} className="text-white hover:text-teal-400 transition duration-300">About</a>
        <a href="#education" onClick={() => setActiveSection('education')} className="text-white hover:text-teal-400 transition duration-300">Education</a>
        <a href="#skills" onClick={() => setActiveSection('skills')} className="text-white hover:text-teal-400 transition duration-300">Skills</a>
        <a href="#projects" onClick={() => setActiveSection('projects')} className="text-white hover:text-teal-400 transition duration-300">Projects</a>
        <a href="#certificates" onClick={() => setActiveSection('certificates')} className="text-white hover:text-teal-400 transition duration-300">Certificates</a>
        <a href="#contact" onClick={() => setActiveSection('contact')} className="text-white hover:text-teal-400 transition duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;