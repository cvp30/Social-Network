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
    extend: {
      spacing: {
        '120': '30rem',
        '112': '28rem',
      }
    },
    colors: {
      'darkSilver': '#9d9d9d',
      // 'primary': '#0092ca',
      'lightWhite': 'white',
      'white': '#eeeff2',
      'bluee': '#0092ca',
      'principal': '#191e27',
      // 'darkButton': '#2A343E',
      'silver': '#dcdfe4',
      // 'secondary': '#212833',
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
          // E7E7E8
          colors: {
            background: '#15202B',
            secondary: '#212833',
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

