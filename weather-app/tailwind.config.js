/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DMSerif: ["DM Serif Display", "serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage:{
        'wallpaper' : "url('./nightcity.jpg')"
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

