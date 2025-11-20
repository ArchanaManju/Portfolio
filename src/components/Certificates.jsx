// src/components/Certificates.jsx
import React from "react";
import { SiMicrosoft, SiMit, SiAnthropic } from "react-icons/si";

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
    <section
      id="certifications"
      className="max-w-[1200px] mx-auto my-8 px-4 py-8 rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#121111] m-[10px]
      p-[20px]" >
      <h2
        className="
          text-[28px]
          font-bold
          mb-6
          text-center
          text-[#b2c4e1]
        "
      >
        My Certificates
      </h2>

      <ul  className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
 <li
  key={index}
  className="flex items-center space-x-2 border rounded-lg p-3 shadow hover:shadow-lg transition"
>
  {/* Icon */}
  <div className="w-[68px] h-[68px] flex-shrink-0  text-[#b2c4e1]"   style={{padding: 20,}}>
    <img
      src={cert.icon}
      alt={`--${cert.issuer}`}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Certificate Text */}
  <div>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-blue-600 hover:underline"
    >
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
