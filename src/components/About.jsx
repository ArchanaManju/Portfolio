
import React from 'react';
import { useState,  useEffect } from 'react';
import '../Styles/about.css';

const profilePhoto = new URL('../assets/profile-photo.jpg', import.meta.url).href;
const TITLES = ["Full Stack Developer", "Software Engineer", "AI Engineer"];

function About() {
const [displayed, setDisplayed] = useState('');
const [titleIndex, setTitleIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
const currentTitle = TITLES[titleIndex];
let timeout;

if (!isDeleting && charIndex < currentTitle.length) {
  timeout = setTimeout(() => setCharIndex(charIndex + 1), 90);
} else if (!isDeleting && charIndex === currentTitle.length) {
  timeout = setTimeout(() => setIsDeleting(true), 1100);
} else if (isDeleting && charIndex > 0) {
  timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
} else if (isDeleting && charIndex === 0) {
  timeout = setTimeout(() => {
    setIsDeleting(false);
    setTitleIndex((titleIndex + 1) % TITLES.length);
  }, 500);
}
setDisplayed(currentTitle.slice(0, charIndex));
return () => clearTimeout(timeout);

}, [charIndex, isDeleting, titleIndex]);

return (
<section id="about" className="about-section">
<div className="about-container">
{/* Left: Text content */}
<div className="about-text">
<h2>
{displayed}<span className="cursor">|</span>
</h2>
<p>
I build scalable, high-performance applications using TypeScript, JavaScript, React, Node.js,
AWS, and LLM orchestration.
</p>
<p>
From crafting intuitive frontends to designing robust APIs, cloud architecture, and intelligent AI workflows, I deliver quality code that drives real impact.
</p>
<p>
Passionate about solving complex challenges in fast-paced, collaborative environments. Ready to build something exceptional together.
</p>
</div>


    {/* Right: Photo */}
    <div className="about-photo">
      <img src={profilePhoto} alt="Profile" loading="lazy" />
    </div>
  </div>
</section>


  );
}

export default About;




