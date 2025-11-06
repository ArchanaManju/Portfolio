import React from 'react';
import ExperienceCard from './ExperienceCard';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const experiences = [
  {
    title: "Frontend Developer",
    subtitle: "Acme Corp",
    icon: <FaReact />,
    description: "Built modern web applications using React and Redux.",
    progress: 85
  },
  {
    title: "Backend Developer",
    subtitle: "Beta Ltd",
    icon: <FaNodeJs />,
    description: "Created RESTful APIs and integrated with databases.",
    progress: 75
  }
];

function ExperienceSection() {
  return (
    <section 
    id="experience"
    style={{
      maxWidth: 1200,
      margin: '2rem auto',
      padding: '2rem 1rem',
      background: 'black',
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 24,
        textAlign: 'center',
        color: '#b2c4e1'
      }}>Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
}

export default ExperienceSection;
