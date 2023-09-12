/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      spacing: {
        '120': '30rem',
      }
    },
    colors: {
      'lightWhite': 'white',
      'white': '#eeeff2',
      'blue': '#0092ca',
      'principal': '#191e27',
      'darkButton': '#4e5d78',
      'silver': '#dcdfe4',
      'darkSilver': '#9d9d9d',
      'secondary': '#212833',
      'darkBorder': '#4b5771',
      'transparent': '#00000000',
    }
  },
  plugins: [],
}

