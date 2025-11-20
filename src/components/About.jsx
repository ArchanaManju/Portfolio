
import React from 'react';
import { useState,  useEffect } from 'react';

const profilePhoto = new URL('../assets/profile-photo.jpg', import.meta.url).href;
// The list of titles to cycle through
const TITLES = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Engineer",
];

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
    <section
       id="about"
       className="max-w-[1200px] mx-auto my-8 px-4 py-8 bg-black rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex gap-8 items-center border border-[#121111] m-[10px]
      p-[20px]" >
      {/* Left: Text content */}
      <div style={{ flex: 1 }}>
     <h2
          style={{
            fontSize: 28,
            fontWeight: '700',
            marginBottom: 24,
            color:"blueviolet",
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          {displayed}
          <span style={{ opacity: 0.7 }}>|</span>
        </h2>
        <p className= "text-[#b2c4e1] font-thin mb-[10px] ">
          I build scalable, high-performance applications using TypeScript, JavaScript, React, Node.js,
          AWS, and LLM orchestration.
        </p>
        <p className= "text-[#b2c4e1] font-thin mb-[10px]">
          From crafting intuitive frontends to designing robust APIs, cloud architecture, and intelligent AI workflows, I deliver quality code that drives real impact.
        </p>
        <p className= "text-[#b2c4e1] font-thin mb-[10px]">
          Passionate about solving complex challenges in fast-paced, collaborative environments. Ready to build something exceptional together.
        </p>
      </div>

      {/* Right: Photo */}
      <div className="
  flex-shrink-0 
  w-[250px] 
  h-[300px] 
  rounded-[12px] 
  overflow-hidden 
  shadow-[0_4px_16px_rgba(0,0,0,0.12)]
">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;




