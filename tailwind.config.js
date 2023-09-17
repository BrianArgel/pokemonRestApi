/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans"]
      },
      colors: {
        primary: "#3490dc", 
        secondary: "#9561e2", 
      }
    },
  },
  plugins: [],
};