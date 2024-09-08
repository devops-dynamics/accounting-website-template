"use client";  // Ensure this is a client-side component

import Image from 'next/image';

export const Hero = () => (
  <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-primary to-green-300 min-h-screen-minus-navbar px-6 sm:px-12 md:px-16 lg:px-32 py-8 sm:py-12 md:py-20">
    {/* Text Section */}
    <div className="max-w-full md:max-w-md lg:max-w-lg text-center md:text-left mt-8 sm:mt-10 md:mt-0 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
        Streamline Your Accounting <br /> with Ease
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100">
        Manage your finances efficiently with our easy-to-use platform. Make accounting simpler and more reliable.
      </p>
      <button className="mt-4 sm:mt-6 px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-green-600 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
        Get Started
      </button>
    </div>

    {/* Image Section */}
    <div className="relative w-full md:w-1/2 h-auto flex justify-end">
      <Image
        src="/hero-image.png"  // Use a string path for images in the /public folder
        alt="Accounting illustration"
        sizes="100vw"
        style={{
          width: '100%',  // Full width
          height: 'auto',  // Maintain aspect ratio
        }}
        priority  // Ensures the image loads quickly
        className="rounded-md"
      />
    </div>
  </section>
);
