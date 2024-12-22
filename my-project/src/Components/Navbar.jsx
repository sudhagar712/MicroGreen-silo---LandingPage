import React, { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

import bannerimg from "../assets/images/logo.png"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed  top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={bannerimg}
            alt="MicroGreen Logo"
            className=" w-[100px] h-[80px]"
          />
         <span className=" font-bold mb-2 text-xl">
        
          LeafitMicro<span className="text-[#a0ecb1] text-2xl">Green</span> 
        </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8  text-sm font-medium">
          {["Home", "About", "Microgreen Types", "Shop", "Blog", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className={`hover:text-green-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <a href={`#${item.toLowerCase().replace(" ", "")}`}>{item}</a>
              </li>
            )
          )}
          <li
            className={`p-1 rounded-full ${
              isScrolled ? "bg-gray-100 text-green-700" : "bg-white text-green-700"
            }`}
          >
            <FiSearch className="text-sm" />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden  fixed top-0 left-0 w-3/4 h-screen bg-green-500 text-white z-40 p-6 transition-all duration-300`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
          <img
            src={bannerimg}
            alt="MicroGreen Logo"
            className=" w-[100px] h-[80px]"
          />
         <span className=" font-bold mb-2 text-xl">
        
          LeafitMicro<span className="text-[#6dab3d]">Green</span> 
        </span>
        </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl focus:outline-none"
            >
              <FiX />
            </button>
          </div>
          <ul className="flex   flex-col space-y-6 text-lg font-medium">
            {["Home", "About", "Microgreen Types", "Shop", "Blog", "Contact"].map(
              (item, index) => (
                <li key={index} className="hover:bg-green-400 p-2" >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="block hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
