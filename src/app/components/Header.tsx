"use client";  // Add this line to mark the component as a Client Component

import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo as the link to the home page */}
        <Link href="/" passHref>
          <a className="text-2xl font-bold text-primary">AccountEase</a>
        </Link>
        
        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/services" passHref>
            <a
              className={`text-lg font-medium ${
                activeLink === 'services' ? 'text-primary border-b-2 border-primary' : 'text-gray-800'
              } hover:text-primary transition`}
              onClick={() => setActiveLink('services')}
            >
              Services
            </a>
          </Link>
          <Link href="/testimonials" passHref>
            <a
              className={`text-lg font-medium ${
                activeLink === 'testimonials' ? 'text-primary border-b-2 border-primary' : 'text-gray-800'
              } hover:text-primary transition`}
              onClick={() => setActiveLink('testimonials')}
            >
              Testimonials
            </a>
          </Link>
          <Link href="/about" passHref>
            <a
              className={`text-lg font-medium ${
                activeLink === 'about' ? 'text-primary border-b-2 border-primary' : 'text-gray-800'
              } hover:text-primary transition`}
              onClick={() => setActiveLink('about')}
            >
              About
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a
              className={`text-lg font-medium ${
                activeLink === 'contact' ? 'text-primary border-b-2 border-primary' : 'text-gray-800'
              } hover:text-primary transition`}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
