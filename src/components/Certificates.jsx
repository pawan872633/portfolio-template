import React from 'react';

const Certificates = () => {
  const certificates = [
    { title: 'Udyam Expert Certificate of Participation', issuer: 'FICCI + Kashi Institute of Technology', date: '10 Dec 2024', signedBy: 'Seema Gupta (Training Head)', details: '' },
    { title: 'Kaggle Python Coder Badge', issuer: 'Kaggle', date: 'N/A', signedBy: 'N/A', details: 'Badge: Python Coder' },
    { title: 'DevTown Certificate of Appreciation', issuer: 'DevTown (#StartupIndia)', date: '18 June 2025', signedBy: 'Ashish Modi', details: '' },
    { title: 'Cyber Bootcamp – Hack Me If You Can', issuer: 'Microsoft Student Chapter + DevTown', date: '12 May 2025', signedBy: 'Ashish Modi', details: 'Badge: Microsoft Learn Student Ambassador' },
    { title: 'be10x AI Tools Workshop', issuer: 'be10x', date: '22 June 2025', signedBy: 'Aditya Goenka & Kachave', details: 'Skills: AI presentations, data analysis, coding' },
    { title: 'Internship – iStudio', issuer: 'iStudio', date: '14 Oct 2024', signedBy: 'Atul Yadav', details: 'Role: Web Dev Intern, Duration: 9 Sept – 14 Oct 2024, Cert ID: ISWD1980085' },
    { title: 'Deloitte Cybersecurity Simulation', issuer: 'Deloitte via Forage', date: '24 June 2025', signedBy: 'Tina McCreery (CHRO)', details: 'Codes: nM9Zs3B2R8epVrP6, xOQ9kuDbZLsSDT6d' },
    { title: 'The Hack Track (Cyber Security Intermediate Certification)', issuer: 'DROP Organization (ISO 9001:2015 Certified)', date: '02-03-2025', signedBy: 'Chief Executive Officer, DROP Organization', details: 'Presented To: Pavan Kumar, Completion Statement: For successfully completing "The Hack Track – Cyber Security Intermediate Certification", Certificate Code: 1124PK85970' }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-6">
           <img src="/certificate.jpg" alt="Certificate Icon" className="w-16 h-16 mr-6" />
            <h2 className="text-4xl font-extrabold text-teal-400">Certificates & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg border border-teal-600">
                <h3 className="text-2xl font-semibold text-teal-300">{cert.title}</h3>
                <p className="text-gray-400 text-lg">Issued By: {cert.issuer}</p>
                <p className="text-gray-400 text-lg">Date: {cert.date}</p>
                <p className="text-gray-400 text-lg">Signed By: {cert.signedBy}</p>
                {cert.details && <p className="text-gray-400 text-lg">Details: {cert.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;