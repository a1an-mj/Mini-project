/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier Prime"', 'monospace'], // Add Courier Prime
    },
  },
  plugins: [
    require('daisyui'),
  ],
}}