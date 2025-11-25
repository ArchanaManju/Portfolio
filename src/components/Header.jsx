import React, { useState } from 'react';
import '../Styles/header.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'github', href: 'https://github.com/ArchanaManju?tab=repositories', external: true },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
  {
    name: 'Resume',
    href: 'https://docs.google.com/document/d/1Ax6dkSNecECxw0uYq6B50IevgDR8aHRK/edit?usp=sharing&ouid=118121754568754716228&rtpof=true&sd=true',
    external: true,
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleInternalClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">Archana Maruthi</div>
        {/* Mobile toggle button */}
        <button
          className="header-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Desktop nav */}
        <nav className="header-nav desktop-nav">
          {navLinks.map(({ name, href, external }) => (
            <a
              key={name}
              href={href}
              className="nav-link"
              onClick={(e) => {
                if (!external && href.startsWith('#')) {
                  handleInternalClick(e, href.substring(1));
                }
              }}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile nav */}
      <nav className={`header-nav mobile-nav${open ? ' open' : ''}`}>
        {navLinks.map(({ name, href, external }) => (
          <a
            key={name}
            href={href}
            className="nav-link mobile-nav-link"
            onClick={(e) => {
              if (!external && href.startsWith('#')) {
                handleInternalClick(e, href.substring(1));
              }
            }}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
