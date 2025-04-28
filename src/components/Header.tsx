import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="self-start sticky bg-blue-100 z-[99] top-0 border-b-2 py-3 border-slate-500">
      <nav className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tighter text-slate-700">
          <span className="text-blue-500">C</span>larity
          <span className="text-blue-500">B</span>oost
        </h1>

        <div>
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};
