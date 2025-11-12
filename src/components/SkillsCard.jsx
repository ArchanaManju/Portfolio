import React from 'react';

function SkillsCard({ title, items }) {
  return (
    <div style={{
      borderRadius: 12,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      padding: 20,
      marginBottom: 16,
      gap: '1rem',
      border: '1px solid #333',
    }}>
      <h3
    style={{ fontSize: 20, color: '#b2c4e1' }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map(({ icon, label }, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '8px',
            }}
          >
            <div
              style={{
                background: '#f5f5f5',
                borderRadius: '12px',
                padding: '12px',    
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '8px',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {icon}
            </div>
            <span
              style={{
                fontSize: 14,
                color: '#b2c4e1'
              }}
            >
              {label}
            </span>
          </div>
        ))}   
</div>  
    </div>
  );
}

export default SkillsCard;    







