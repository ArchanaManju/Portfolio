// src/components/Certificates.jsx
import React from "react";


function ConatactCard() {
return (
  <div
    id="contact"
        style={{
      maxWidth: 1200,
      padding: '2rem 1rem',
      background: 'black',
      margin:'2rem auto',
    }}
    className="
      mx-auto 
      my-8 
      px-4 
      py-8 
      bg-black 
      rounded-[12px] 
      border border-[#333] 
      shadow-[0_4px_16px_rgba(0,0,0,0.08)]
    "
  >
    <div className="flex flex-col">
      <h3 className="m-0 text-[22px] font-bold text-[#b2c4e1]">
        emailId : archanahm2021@gmail.com
      </h3>
      {/* Add additional info here if needed */}
    </div>
  </div>
);

}

export default ConatactCard;
