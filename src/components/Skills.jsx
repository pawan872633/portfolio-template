import React from 'react';

const Skills = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java'],
    frontend: ['React.js', 'Bootstrap', 'TailwindCSS'],
    backendDatabase: ['Node.js', 'MongoDB', 'MySQL'],
    cybersecurityTools: ['Burp Suite', 'OWASP ZAP', 'AhMyth', 'Nmap', 'Wireshark', 'DVWA', 'Metasploitable', 'Git Bash'],
    devToolsOS: ['VS Code', 'GitHub', 'VirtualBox', 'Kali Linux', 'Parrot OS', 'Windows 11']
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
            <img src="/assets/skills and techonolgy.jpg" alt="Toolkit Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-300">Languages</h3>
              <ul className="list-disc pl-5 space-y-1">
                {skills.languages.map((skill, index) => <li key={index} className="text-gray-400 text-lg">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-300">Frontend</h3>
              <ul className="list-disc pl-5 space-y-1">
                {skills.frontend.map((skill, index) => <li key={index} className="text-gray-400 text-lg">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-300">Backend & Database</h3>
              <ul className="list-disc pl-5 space-y-1">
                {skills.backendDatabase.map((skill, index) => <li key={index} className="text-gray-400 text-lg">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-300">Cybersecurity Tools</h3>
              <ul className="list-disc pl-5 space-y-1">
                {skills.cybersecurityTools.map((skill, index) => <li key={index} className="text-gray-400 text-lg">{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-300">Dev Tools & OS</h3>
              <ul className="list-disc pl-5 space-y-1">
                {skills.devToolsOS.map((skill, index) => <li key={index} className="text-gray-400 text-lg">{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;