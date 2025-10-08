import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col items-center space-y-4">
      {/* Heart and Name */}
      <p className="text-center text-sm">
        Made with <span className="text-red-500">❤️</span> by Nishant Singh Rajput
      </p>

      {/* Social Links */}
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/nishant-singh-529441237/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/nishant_rajput750/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/Nishantsingh750"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://leetcode.com/u/nishantsingh7508/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          <FaCode size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
