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
     <div className="w-full min-h-screen flex flex-col items-center bg-black m-0 p-0;">
      <div className="w-full max-w-6xl mx-auto p-4">
      <Header />
      <About/> 
      <Certifications />
      <ExperienceSection />    
      <Skills/>

      <ContactsCard/>
    </div>
    </div>
  );
}

export default App;
