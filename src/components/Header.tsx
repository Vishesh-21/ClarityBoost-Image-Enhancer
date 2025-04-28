import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="self-start sticky top-0 border-b-2 py-3">
      <nav className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tighter">
          <span className="text-purple-500">C</span>larity
          <span className="text-purple-500">B</span>oost
        </h1>

        <div>
          <button className="bg-purple-700 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-purple-800">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};
