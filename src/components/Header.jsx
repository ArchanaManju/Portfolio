// src/components/Header.jsx
import React from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  // { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Education', href: '#education' },
  { name: 'github', href: 'https://github.com/ArchanaManju?tab=repositories', external: true },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: 'https://docs.google.com/document/d/1Ax6dkSNecECxw0uYq6B50IevgDR8aHRK/edit?usp=sharing&ouid=118121754568754716228&rtpof=true&sd=true', external: true }
];

function Header() {
      const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header style={{
      maxWidth: 1200,
      margin: '2rem auto',
      padding: '2rem 1rem',
      background: 'black',
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
      <div style={{
        fontWeight: '700',
        fontSize: '1.5rem',
        color: '#4f8cff',
        userSelect: 'none',
        cursor: 'default'
      }}>
        Archana Maruthi
      </div>
      <nav>
        <ul style={{
          display: 'flex',
          gap: '1.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '1rem',
          fontWeight: '600',
          color: '#4f8cff',
        }}>
       {navLinks.map(({ name, href, external }) => (
  <li key={name}>
    {external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#4f8cff',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#356ac3'}
        onMouseLeave={e => e.currentTarget.style.color = '#4f8cff'}
      >
        {name}
      </a>
    ) : (
      <a
        href={href}
        style={{
          color: '#356ac3',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onClick={e => {
          e.preventDefault();
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#4f8cff'}
        onMouseLeave={e => e.currentTarget.style.color = '#356ac3'}
      >
        {name}
      </a>
    )}
  </li>
))}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
