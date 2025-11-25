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

function App() {
return (
<div className="min-h-screen bg-black text-slate-50">
<Header />
<main className="max-w-5xl mx-auto px-4 py-6 space-y-12">
<About />
<Certifications />
<ExperienceSection />
<Skills />
<ContactsCard />
</main>
</div>
);
}
export default App;