import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Ensure Tailwind scans your source files
    './public/**/*.html',  // Ensure Tailwind looks into your public folder if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38b2ac',  // Custom primary color for your theme
        secondary: '#f56565', // Custom secondary color
      },
      spacing: {
        '128': '32rem',  // Custom spacing value
        '144': '36rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',  // Custom aspect ratio (4:3) as string
        '16/9': '16 / 9',  // Custom aspect ratio (16:9) as string
        '1/1': '1 / 1',   // Square aspect ratio (1:1) as string
      },
      minHeight: {
        'screen-minus-navbar': 'calc(100vh - 4rem)',  // Minimum height of the screen minus the navbar height
      },
    },
  },
  plugins: [],
}

export default config
