// src/components/ExperienceCard.jsx
import React from 'react';


function ExperienceCard({ title, subtitle, icon, description, progress }) {
return (
  <div
    
    className="
      rounded-[12px]
      shadow-[0_4px_16px_rgba(0,0,0,0.08)]
      flex
      items-center
      gap-4
      border border-[#121111]
      m-[10px]
      p-[20px]
    "
  >
    <div 
        className="text-[32px] text-[#b2c4e1] m-[10px]">
      {icon || "💼"}
    </div>

    <div className="flex-1">
      <h3 className="m-0 text-[22px] font-bold text-[#b2c4e1]">
        {title}
      </h3>

      <p className="mt-1 mb-2 text-[#b2c4e1] text-[14px]">
        {subtitle}
      </p>

      <p className="m-0 text-[#b2c4e1] text-[16px]">
        {description}
      </p>

      {progress !== undefined && (
        <div
          className="
            mt-2
            h-2
            rounded-[4px]
            overflow-hidden
            bg-[#1a1a1a]
          "
        >
          <div
            className="h-full bg-[#b2c4e1]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  </div>
);

}


export default ExperienceCard;
