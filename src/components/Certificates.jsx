import React from "react";
import '../Styles/certificate.css';

const mitImage = new URL('../assets/mit-logo.png', import.meta.url).href;
const claudeImage = new URL('../assets/Claude_AI_logo.svg', import.meta.url).href;
const MSoftImage = new URL('../assets/MSoftImage.png', import.meta.url).href;

const certificates = [
  {
    title: "Claude code in action",
    issuer: "Anthropic",
    link: 'https://verify.skilljar.com/c/8ufar2sjaag6',
    icon: claudeImage
  },
  {
    title: "Python Programming Certificate",
    issuer: "Microsoft",
    link: 'https://www.coursera.org/account/accomplishments/certificate/K1Y129WB7BZJ',
    icon: MSoftImage
  },
  {
    title: "Data Science and Machine Learning",
    issuer: "MIT",
    link:'https://olympus.mygreatlearning.com/eportfolio',
    icon: mitImage,
  },
];

function Certificates() {
  return (
    <section id="certifications" className="certificates-section">
      <h2>My Certificates</h2>
      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            <div className="cert-icon">
              <img src={cert.icon} alt={`Logo of ${cert.issuer}`} />
            </div>
            <div className="cert-text">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
