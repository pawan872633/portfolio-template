import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-teal-900 to-black animate-cyber-glitch">
      <Navbar setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;