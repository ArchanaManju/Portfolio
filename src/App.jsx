import React from 'react';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ExperienceSection from './components/ExperienceSection';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/SkillsSection';
import Certifications from './components/Certificates';
import ContactsCard from './components/ContactCard';

const profilePhoto = new URL('./assets/profile-photo.jpg', import.meta.url).href;

function App() {
  return (
    <div 
    style={{
      margin: 'auto',
      padding: '2rem 1rem',
      background: 'white',
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      backgroundColor:'black'
    }} >
      <Header />
      <About/> 
      <ExperienceSection />    
      <Skills/>
      <Certifications />
      <ContactsCard/>

    </div>
  );
}

export default App;
