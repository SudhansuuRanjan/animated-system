/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(10px)",
    },
  },
  plugins: [require("tailwindcss-filters")],
};