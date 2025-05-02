import React from "react";
import { FaGithub } from "react-icons/fa6";

export const Header: React.FC = () => {
  return (
    <div className="self-start sticky bg-blue-100 z-[99] top-0 border-b-2 py-3 border-slate-500">
      <nav className="flex items-center justify-between">
        <a href="/" className="text-3xl font-bold tracking-tighter text-slate-700">
          <span className="text-blue-500">C</span>larity
          <span className="text-blue-500">B</span>oost
        </a>
        <a
          href="https://github.com/Vishesh-21/ClarityBoost-Image-Enhancer"
          className="hover:text-black text-gray-500 hover:-translate-y-1 transition-all duration-200 text-sm"
          target="_blank"
          title="GitHub repo"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </nav>
    </div>
  );
};
