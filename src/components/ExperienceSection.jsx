import React from 'react';
import ExperienceCard from './ExperienceCard';
import { FaReact, FaBrain, FaSitemap, FaDatabase, FaJava, FaTools } from 'react-icons/fa';
import '../styles/experience.css';

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
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <ul className="experience-list">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </ul>
    </section>
  );
}

export default ExperienceSection;
