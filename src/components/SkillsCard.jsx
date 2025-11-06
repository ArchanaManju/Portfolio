import React from 'react';

function SkillsCard({ title, items }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        position: 'relative',               
        border: '1px solid #e0e0e0',
        overflow: 'hidden',
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: 22,
          fontWeight: '700',
          color: '#111',
          marginBottom: '16px',
        }}
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
                color: '#333',
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







