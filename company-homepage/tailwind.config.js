/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#EBEDE9',        // Light background color
        light_green: '#A0B3A8',  // Cool gray
        green: '#778F6E',        // Olive green tone
        dark_green: '#55664B',   // Earthy green
        brown: '#947156',        // Warm brown
      },
    },
  },
  plugins: [],
};
