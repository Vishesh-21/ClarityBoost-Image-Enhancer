import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-6 font-medium pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Image Enhancer. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
