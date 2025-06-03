"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope, FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaUser },
    { href: "/portfolio", label: "Portfolio", icon: FaBriefcase },
    { href: "/skills", label: "Skills", icon: FaCogs },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              portfolioNew2
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50 group"
                >
                  <IconComponent className="mr-2 text-sm group-hover:scale-110 transition-transform duration-300" />
                  {item.label}
                </Link>
              );
            })}
            
            {/* Call to Action Button */}
            <Link
              href="/resume"
              className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ml-4"
            >
              <FaFileDownload className="mr-2 text-sm" />
              Resume
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "max-h-96 opacity-100 pb-4" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50"
                >
                  <IconComponent className="mr-3 text-sm" />
                  {item.label}
                </Link>
              );
            })}
            
            {/* Mobile Call to Action */}
            <Link
              href="/resume"
              onClick={closeMenu}
              className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md mx-3 mt-2 justify-center"
            >
              <FaFileDownload className="mr-2 text-sm" />
              Download Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;