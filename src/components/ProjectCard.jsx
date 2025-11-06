import React from 'react';

function ProjectCard() {
  return (
    <div className="border-2 rounded-xl shadow-lg p-6 w-full max-w-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative">
      {/* Decorative circle (top right) */}
      <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400"></div>

      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 >AI-Powered Chatbot</h2>
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
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">React</span>
        <span className=" text-xs text-gray-300 py-1 px-2 rounded-md">Node.js</span>
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">MongoDB</span>
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">Socket.io</span>
        <span className="text-xs text-gray-300 py-1 px-2 rounded-md">Gemini API</span>
      </div>

      {/* View code button */}
      <a
        href="#"
        className="inline-flex items-center  text-gray-50 text-sm px-4 py-2 rounded-lg hover:bg-purple-500 transition-all duration-200"
      >
        <svg
          className="mr-2"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 16h-1v-4h-1m1 4V9h-1"></path>
          <rect x="3" y="4" width="18" height="18" rx="2"></rect>
        </svg>
        View Code
      </a>
    </div>
  );
}

export default ProjectCard;
