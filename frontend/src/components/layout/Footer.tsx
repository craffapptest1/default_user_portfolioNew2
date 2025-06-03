"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">portfolioNew2</h3>
            <p className="text-gray-300 text-sm">
              Crafting digital experiences with passion and precision. Let's bring your ideas to life.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Ready to collaborate?</p>
              <a
                href="mailto:hello@portfolionew2.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
              >
                <FiMail className="mr-2 h-4 w-4" />
                hello@portfolionew2.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                About Me
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media and CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transform hover:scale-110 transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} portfolioNew2. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link
                href="/resume"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Download Resume
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Testimonials
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;