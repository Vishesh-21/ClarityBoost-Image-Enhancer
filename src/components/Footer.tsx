import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-6 font-medium pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Image Enhancer. All rights reserved.
        </p>
        <div className="flex gap-4 items-center mt-2 md:mt-0">
          <a
            href="https://github.com/Vishesh-21/ClarityBoost-Image-Enhancer"
            className="hover:text-black text-gray-500 hover:-translate-y-1 transition-all duration-200 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishesh-verma-35b31b279/"
            className="hover:text-blue-500 text-gray-500 hover:-translate-y-1 transition-all duration-200 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
