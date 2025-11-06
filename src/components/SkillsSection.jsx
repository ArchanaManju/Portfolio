import React from 'react';
import { FaJs, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaGitlab, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiRedux, SiJest, SiSpring, SiPostgresql, SiGraphql, SiExpress, SiIntellijidea, SiHibernate } from 'react-icons/si';
import SkillsCard from './SkillsCard';

const skills = [
  {
    title: 'Programming Languages',
    items: [
      { icon: <FaJs className="text-yellow-400"/>, label: 'JavaScript' },
      { icon: <FaJava className="text-red-600"/>, label: 'Java' },
      { icon: <SiTypescript className="text-blue-500"/>, label: 'TypeScript' },
      { icon: <img alt="SQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8 inline" />, label: 'SQL' },
    ],
  },
  {
    title: 'Backend Technologies',
    items: [
      { icon: <FaNodeJs className="text-green-600"/>, label: 'Node.js' },
      { icon: <SiSpring className="text-green-500" />, label: 'Spring' },
      { icon: <SiSpring className="text-green-400" />, label: 'Spring Boot' },
      { icon: <SiPostgresql className="text-blue-400"/>, label: 'PostgreSQL' },
      { icon: <SiMongodb className="text-green-700"/>, label: 'MongoDB' },
      { icon: <SiHibernate className="text-green-900"/>, label: 'Hibernate' },
      { icon: <SiSpring className="text-green-400"/>, label: 'REST API' },
      { icon: <SiGraphql className="text-pink-500"/>, label: 'GraphQL' },
      { icon: <SiExpress className="text-gray-200"/>, label: 'Express' },
    ],
  },
  {
    title: 'Frontend Technologies',
    items: [
      { icon: <FaReact className="text-blue-400"/>, label: 'React' },
      { icon: <FaVuejs className="text-green-400"/>, label: 'Vue' },
      { icon: <FaHtml5 className="text-orange-500"/>, label: 'HTML5' },
      { icon: <FaCss3Alt className="text-blue-600"/>, label: 'CSS3' },
      { icon: <SiRedux className="text-purple-500"/>, label: 'Redux' },
      { icon: <SiJest className="text-pink-400"/>, label: 'Jest' },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { icon: <FaGithub className="text-gray-300"/>, label: 'GitHub' },
      { icon: <FaGitlab className="text-orange-400"/>, label: 'GitLab' },
    
      { icon: <FaAws className="text-yellow-400"/>, label: 'AWS' },
      { icon: <SiIntellijidea className="text-pink-600"/>, label: 'IntelliJ' },
      { icon: <FaReact className="text-blue-400"/>, label: 'VS Code' },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills"
    style={{
      maxWidth: 1200,
      margin: '2rem auto',
      padding: '2rem 1rem',
      background: 'white',
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 24,
        textAlign: 'center',
        color: '#111'
      }}>Technical Skills</h2>
       {skills.map((cat, idx) => (
         <SkillsCard key={idx} {...cat} />
        ))}
      
    </section>
  );
}

export default SkillsSection;
