// src/components/ExperienceCard.jsx
import React from 'react';

function ExperienceCard({ title, subtitle, icon, description, progress }) {
  return (
    <div style={{
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      padding: 20,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '1px solid #333',
    }}>
      <div style={{ fontSize: 32, color: '#b2c4e1' }}>
        {/* You can replace this with an icon component like react-icons */}
        {icon || '💼'}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: 0, 
          fontSize: 22, 
          fontWeight: '700', 
          color: '#b2c4e1'
        }}>{title}</h3>
        <p style={{ margin: '4px 0 8px', color: '#555', fontSize: 14 }}>{subtitle}</p>
        <p style={{ margin: 0, color: '#444', fontSize: 16 }}>{description}</p>
        {progress !== undefined && (
          <div style={{
            marginTop: 8,
            height: 8,
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
 
            }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
