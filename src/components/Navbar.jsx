import React, { useState } from "react";
import '../App.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-24 bg-purple-800 px-6 fixed w-full z-50">
      <div className="text-white text-3xl font-bold ml-6">Versha's Portfolio</div>
      
      {}
      <div 
        className="text-white text-3xl cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>
      
      {}
      <ul
        className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 
          absolute md:relative top-24 md:top-0 bg-purple-800 md:bg-transparent w-full md:w-auto
          transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden md:flex"}`}
      >
        <li>
          <button
            onClick={() => window.scrollTo(0, document.getElementById('home').offsetTop)}
            className="font-semibold text-lg text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition duration-300"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => window.scrollTo(0, document.getElementById('about').offsetTop)}
            className="font-semibold text-lg text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition duration-300"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => window.scrollTo(0, document.getElementById('services').offsetTop)}
            className="font-semibold text-lg text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition duration-300"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => window.scrollTo(0, document.getElementById('projects').offsetTop)}
            className="font-semibold text-lg text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition duration-300"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => window.scrollTo(0, document.getElementById('contact').offsetTop)}
            className="font-semibold text-lg text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition duration-300"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
