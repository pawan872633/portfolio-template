import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
            <img src="/assets/about.jpg" alt="Developer Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">About Me</h2>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed">
            I am a passionate developer and cybersecurity learner with hands-on experience in full-stack development, ethical hacking, and AI-based threat detection. I enjoy building secure, responsive, and intelligent solutions. Currently exploring bug bounty hunting, open-source, and security automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;