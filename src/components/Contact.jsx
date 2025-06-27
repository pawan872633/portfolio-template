import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
           <img src="/assets/contact.jpg" alt="Email Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">Contact Me</h2>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-gray-400 text-xl">Email: <a href="mailto:pawanchakravarti84@gmail.com" className="text-teal-300 hover:underline">pawanchakravarti84@gmail.com</a></p>
            <p className="text-gray-400 text-xl">LinkedIn: <a href="https://linkedin.com/in/pavan-kumar-729900303" className="text-teal-300 hover:underline">linkedin.com/in/pavan-kumar-729900303</a></p>
            <p className="text-gray-400 text-xl">GitHub: <a href="https://github.com/pawan872633" className="text-teal-300 hover:underline">github.com/pawan872633</a></p>
            <a href="mailto:pawanchakravarti84@gmail.com" className="mt-6 inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-2xl animate-bounce">Send Message</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;