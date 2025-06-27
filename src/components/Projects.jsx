import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'AI_CyberShield', description: 'ML-powered cybersecurity model for anomaly detection and threat classification', tech: 'Python, Pandas, Scikit-learn, AI datasets', status: 'Under development and testing' },
    { title: 'Portfolio Website', description: 'Personal website to showcase skills and achievements', tech: 'React.js, TailwindCSS', status: 'Completed' },
    { title: 'nmap-scanner', description: 'Shell-based network scanner for information gathering', tech: 'Nmap, Bash, Linux', status: 'Completed' },
    { title: 'React E-Commerce App', description: 'Frontend UI with cart functionality and filter system', tech: 'React.js, Bootstrap, DummyAPI', status: 'Completed' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
          <img src="/assets/projects.jpg" alt="Project Network Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg border border-teal-600">
                <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>
                <p className="text-gray-400 text-lg">{project.description}</p>
                <p className="text-gray-400 text-lg">Tech: {project.tech}</p>
                <p className="text-gray-400 text-lg">Status: {project.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;