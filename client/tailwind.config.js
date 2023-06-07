/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': 'white',
      'blue': '#0092ca',
      'principal': '#191e27',
      'silver': '#dcdfe4',
      'secondary': '#212833',
      'darkBorder': '#4b5771',
    }
  },
  plugins: [],
}

