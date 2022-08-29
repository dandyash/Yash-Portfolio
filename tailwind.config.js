/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ['Caveat'],
        Montserrat: ['Montserrat'],
      },
      colors: {
        primary: "#FF331F",
        secondary: "#3626A7",
        dark: "rgba(0, 0, 0, 0.92)", //171412 //0D0106 //262322
        light: "#FBFBFF",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
