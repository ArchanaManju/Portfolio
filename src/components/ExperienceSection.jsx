import React from 'react';
import ExperienceCard from './ExperienceCard';
import { FaReact, FaBrain, FaSitemap, FaDatabase, FaJava, FaTools } from 'react-icons/fa';


const experiences = [
  {
    title: "🚀 Frontend Project Leadership & Innovation",
    subtitle: "Treasure Data Inc",
    icon: <FaReact />,
    description: "Built modern web applications using React and Redux.",
    progress: 85
  },
  {
    title: "🦾 AI Engineer",
    subtitle: "Treasure Data Inc",
    icon:  <FaBrain />, 
    description: "Developed AI-driven features and integrated machine learning models into existing platforms for predictive analytics.",
    progress: 75
  },
  {
    title: "🚀 Software Development & Engineering Lead",
    subtitle: "arm",
    icon: <FaTools />,
    description: "Setup automated test framework and performed API and performance testing.",
    progress: 100
  },
  {
    title: "🧪 Senior Software Development Engineer in Test (SDET)",
    subtitle: "Gta/Hotel Beds",
    icon: <FaSitemap />,
    description: "Contributed to both frontend and backend development using Javascript, node.js, React, and PostgreSQL.",
    progress: 100
  },
  {
    title: "⚙️ Senior Software Automation Engineer (Mobile & Web)",
    subtitle: "Digital Insight",
    icon: <FaDatabase />, 
    description: "Full-Stack Automation, API Automation Specialization, Database Integration,Custom Scripting & Tooling",
    progress: 100
  },
    {
    title: "🔗 Integration Engineer",
    subtitle: "Cisco Systems",
    icon: <FaJava />, 
    description: "Engineered comprehensive automation frameworks.Set up and managed the Build System using Jenkins to automate the continuous integration and delivery pipeline.",
    progress: 100
  }
];

function ExperienceSection() {
  return (
    <section  
    style={{
      maxWidth: 1200,
      padding: '2rem 1rem',
      background: 'black',
      margin:'2rem auto',
    }}
    id="experience"
    className="max-w-[1200px] mx-auto my-8 px-4 py-8 bg-black rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
    >
  <h2
    className="text-[28px] font-bold mb-6 text-center text-[#b2c4e1]"
  >
    Experience
  </h2>
  <ul

    className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {experiences.map((exp, idx) => (
      <ExperienceCard key={idx} {...exp} />
    ))}
  </ul>
  </section>
 );
}

export default ExperienceSection;
