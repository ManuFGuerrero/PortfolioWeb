/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
theme: {
  extend: {
    animation: {
      tilt: "tilt 3s linear infinite",
    },
    keyframes: {
      tilt: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(1deg)" },
      },
    },
  },
},
  plugins: [],
}

