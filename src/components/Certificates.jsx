// src/components/Certificates.jsx
import React from "react";

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    link: "https://coursera.org/verify/xyz",
  },
  {
    title: "Full Stack Web Certificate",
    issuer: "FreeCodeCamp",
    link: "https://freecodecamp.org/certificate/abc",
  },
];

function Certificates() {
  return (
    <section className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">My Certificates</h2>
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
