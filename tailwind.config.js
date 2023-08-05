/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: ["linear-gradient('transparent','rgba(0,0,0,.70)','rgba(0,0,0,0.95)'"]
      },
      zIndex: {
        '99': '99',
        '1': '1'
      }
    },
  },
  plugins: [],
}

