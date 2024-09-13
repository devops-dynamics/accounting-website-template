// Import the Tailwind CSS Config type
import type { Config } from 'tailwindcss'

// Define the Tailwind CSS configuration
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all files in the src directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include Next.js pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include your components directory
    './public/**/*.html', // Optionally include public folder if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38b2ac', // Custom primary color
        secondary: '#f56565', // Custom secondary color
        accent: '#ffd54f', // Additional accent color
      },
      spacing: {
        '128': '32rem', // Custom spacing values
        '144': '36rem',
      },
      aspectRatio: {
        '4/3': '4 / 3', // Custom aspect ratios
        '16/9': '16 / 9',
        '1/1': '1 / 1',
      },
      minHeight: {
        'screen-minus-navbar': 'calc(100vh - 4rem)', // Minimum height of the screen minus navbar
      },
    },
  },
  plugins: [],
}

// Export the configuration
export default config
