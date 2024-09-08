"use client";  // Ensure this is a client-side component

import { useState } from 'react';  // For toggling mobile menu
import Link from 'next/link';  // For navigation

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-2xl font-extrabold text-green-600">
                Accounting
              </a>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="/services">
              <a className="text-gray-700 hover:text-green-600 transition duration-200">Services</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-green-600 transition duration-200">About</a>
            </Link>
            <Link href="/testimonials">
              <a className="text-gray-700 hover:text-green-600 transition duration-200">Testimonials</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-green-600 transition duration-200">Contact</a>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-green-600 focus:outline-none transition duration-200"
              onClick={toggleMenu}
            >
              {/* Hamburger Icon */}
              <div className="space-y-1.5"> {/* Adjusted spacing between lines */}
                <span
                  className={`block w-6 h-0.5 bg-green-600 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-green-600 transition-opacity duration-200 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-green-600 transition-transform duration-200 ${
                    isOpen ? 'transform -rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smoother and Faster Animation */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-lg overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          <Link href="/services">
            <a className="block text-gray-700 hover:text-green-600 transition duration-200">Services</a>
          </Link>
          <Link href="/about">
            <a className="block text-gray-700 hover:text-green-600 transition duration-200">About</a>
          </Link>
          <Link href="/testimonials">
            <a className="block text-gray-700 hover:text-green-600 transition duration-200">Testimonials</a>
          </Link>
          <Link href="/contact">
            <a className="block text-gray-700 hover:text-green-600 transition duration-200">Contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
};
