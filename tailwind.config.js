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
        primary: '#408dfb',
        highlight: '#00ff84',
        secondary: '#6440fb',
        primaryLight: '#6366f1',
        bgLight: '#f5f7fe',
        dimText: '#777777',
        desktopPrimary: '#00406E',
        desktopText: '#3D3D3D',
        desktopPrimaryLight: '#E2F3FF',
        desktopTextLight: '#3d3d3d80',
      },
      gridTemplateColumns: {
        sidebar: '250px auto', //for sidebar layout
        'sidebar-collapsed': '64px auto', //for collapsed sidebar layout
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
