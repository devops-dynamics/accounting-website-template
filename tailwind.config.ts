import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Ensure Tailwind scans the right files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ba776',  // Custom primary color
        secondary: '#f4f4f4',  // Custom secondary color
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Default font set to Helvetica
      },
    },
  },
  plugins: [],
};

export default config;
