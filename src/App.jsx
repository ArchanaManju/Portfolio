
import ExperienceSection from './components/ExperienceSection';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/SkillsSection';
import Certifications from './components/Certificates';
import ContactsCard from './components/ContactCard';

function App() {
return (
<div className="app-root">
<Header />
<main className="app-container">
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