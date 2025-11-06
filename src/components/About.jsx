
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
      style={{
        maxWidth: 1200,
        margin: '2rem auto',
        padding: '2rem 1rem',
        background: 'black',
        borderRadius: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
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
        <p style={{ color:"#b2c4e1", fontSize: 16, lineHeight: 1.5, marginBottom: 16 }}>
          I build scalable, high-performance applications using TypeScript, JavaScript, React, Node.js,
          AWS, and LLM orchestration.
        </p>
        <p style={{ color: '#b2c4e1', fontSize: 16, lineHeight: 1.5, marginBottom: 16 }}>
          From crafting intuitive frontends to designing robust APIs, cloud architecture, and intelligent AI workflows, I deliver quality code that drives real impact.
        </p>
        <p style={{ color: '#b2c4e1', fontSize: 16, lineHeight: 1.5 }}>
          Passionate about solving complex challenges in fast-paced, collaborative environments. Ready to build something exceptional together.
        </p>
      </div>

      {/* Right: Photo */}
      <div
        style={{
          flexShrink: 0,
          width: 250,
          height: 300,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        }}
      >
        <img
          src={profilePhoto}
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;




