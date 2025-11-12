import React from 'react';

function ProjectCard() {
  return (
    <div className="border-2 rounded-xl shadow-lg p-6 w-full max-w-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative">
      {/* Decorative circle (top right) */}
      <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400"></div>

      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 >Online Food Dilvery</h2>
        <button className="m-1 text-xs rounded-lg transition-all duration-200">
          Details
        </button>
      </div>

      {/* Bullet points */}
      <ul className="list-disc pl-6 text-gray-200 text-sm mb-4 space-y-1">
        <li>
          Constructed an AI chatbot using MERN stack and Gemini API for dynamic conversation flow.
        </li>
        <li>
          Responsive UI in React with real-time Socket.io communication.
        </li>
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">React</span>
        <span className=" text-xs text-gray-300 py-1 px-2 rounded-md">Node.js</span>
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">Claude code</span>
      </div>

      {/* View code button */}
      <a
        href="#"
        className="inline-flex items-center  text-gray-50 text-sm px-4 py-2 rounded-lg hover:bg-purple-500 transition-all duration-200"
      >
        <svg
          className="mr-2"
          height="18"
          width="18"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
      1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27 7.66 7.66 0 012 
      .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 
      3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 
      0 0016 8c0-4.42-3.58-8-8-8z" />
    
        </svg>
        View Code
      </a>
    </div>
  );
}

export default ProjectCard;
