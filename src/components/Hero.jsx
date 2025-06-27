import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-900 to-black text-white overflow-hidden animate-cyber-glitch"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-teal-500 hover:scale-105 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-pulse">
              Pavan Kumar
            </h2>
            <p className="text-2xl text-gray-300">
              Full Stack Developer & Cybersecurity Enthusiast
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg animate-bounce"
            >
              Hire Me
            </a>
          </div>

          {/* RIGHT SIDE: Only Developer Image */}
          <div className="flex-1 text-center">
             <img
              src={`${process.env.PUBLIC_URL}/assets/Pc.png`}
              alt="Software Developer"
              className="w-72 h-72 rounded-xl shadow-xl object-cover mx-auto"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
