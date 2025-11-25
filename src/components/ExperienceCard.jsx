import React from 'react';
import '../styles/experience.css';

function ExperienceCard({ title, subtitle, icon, description, progress }) {
  return (
    <li className="experience-card">
      <div className="experience-icon">{icon || "💼"}</div>
      <div className="experience-content">
        <h3>{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <p className="description">{description}</p>
        {progress !== undefined && (
          <div className="progress-bar-background">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </li>
  );
}

export default ExperienceCard;
