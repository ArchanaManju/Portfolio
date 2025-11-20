import React from 'react';

function SkillsCard({ title, items }) {
return (
  <div
  style={{padding: 20,}}
    className="
      rounded-[12px]
      shadow-[0_4px_16px_rgba(0,0,0,0.08)]
      p-5
      mb-4
      gap-4
      border border-[#333]
    "
  >
    <h3 className="text-[20px] text-[#b2c4e1]">
      {title}
    </h3>

    <div className="flex flex-wrap">
      {items.map(({ icon, label }, idx) => (
        <div
          key={idx}
          style={{margin: '8px'}}
          className="
            flex
            flex-col
            items-center
          "
        >
          <div
          
            className="
              text-[32px]
              text-[#b2c4e1]
              rounded-[12px]
              p-3
              shadow-[0_2px_8px_rgba(0,0,0,0.1)]
              mb-2
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            {icon}
          </div>

          <span className="text-[14px] text-[#b2c4e1]">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

}

export default SkillsCard;    







