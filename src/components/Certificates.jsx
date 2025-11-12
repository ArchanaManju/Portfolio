// src/components/Certificates.jsx
import React from "react";

const certificates = [
  {
    title: "Claude code in action",
    issuer: "Anthropic",
    link: 'https://verify.skilljar.com/c/8ufar2sjaag6'
  },
  {
    title: "Python Programming Certificate",
    issuer: "Microsoft",
    link: 'https://www.coursera.org/account/accomplishments/certificate/K1Y129WB7BZJ'
  },
    {
    title: "Data Science and Machine Learning",
    issuer: "MIT",
    link:'https://olympus.mygreatlearning.com/eportfolio'
  },

];

function Certificates() {
  return (
    <section   
    id="certifications"
    style={{
      maxWidth: 1100,
      margin: '2rem auto',
      padding: '2rem 1rem',
      background: 'black',
      borderRadius: 12,
      border: '1px solid #333',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    }}>
    <h2 style={{
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 24,
        textAlign: 'center',
        color: '#b2c4e1'
      }}>My Certificates</h2>
      <ul className="space-y-4">
        {certificates.map((cert, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition flex items-center space-x-4"
          >
            <div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {cert.title}
              </a>
              <p className="text-sm text-gray-600">— {cert.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
