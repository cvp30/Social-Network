import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mid': '1320px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '120': '30rem',
        '112': '28rem',
      }
    },
    colors: {
      'darkSilver': '#8b98a5',

      'lightWhite': 'white',
      'white': '#eeeff2',
      'bluee': '#0092ca',
      'principal': '#191e27',

      'silver': '#dcdfe4',

      'darkBorder': '#4b5771',
      'transparent': '#00000000',
    }
  },

  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: 'light',
      layout: {},
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0092ca',
            },
            secondary: '#eeeff2',
            ModuleItem: '#EBECEC',
            textItem: '#eeeff2',
            foreground: '#4b5771',
            default: 'white',
            followBtn: '#4e5d78',
          },
          layout: {

          }
        },
        dark: {
          colors: {
            background: '#15202B',
            secondary: '#1E2732',
            primary: {
              DEFAULT: '#0092ca',
            },
            textItem: '#eeeff2',
            default: '#15202B',
            followBtn: '#eeeff2',
            ModuleItem: '#2A343E',
          }
        }
      }
    })
  ],
}

