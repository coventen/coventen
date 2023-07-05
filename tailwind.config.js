/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        highlight: '#00ff84',
        secondary: '#6440fb',
        primaryLight: '#1a064f',
        bgLight: '#f5f7fe',
        dimText: '#777777',
      },
    },
  },
  plugins: [],
};
