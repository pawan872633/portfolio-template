import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
           <img src="/assets/education.jpg" alt="Graduation Cap Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">Education</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">B.Tech (2022–2026)</h3>
              <p className="text-gray-400 text-lg">Branch: Computer Science & Engineering (AIML)</p>
              <p className="text-gray-400 text-lg">Institute: Kashi Institute of Technology, Varanasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;