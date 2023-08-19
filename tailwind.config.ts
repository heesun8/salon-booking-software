import { type Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rondal: ['rondal'],
        country: ['country'],
        // rondal: ['rondal', 'Arial', ...defaultTheme.fontFamily.sans], this made my css rondal font declarations in global.css meaningless(??) font is not working even though they are commented out  ,
        noto: ['Noto Serif Tamil'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
    colors: {
      'peach': {
        50: '#f6b092',
        100: '#FFDBC0',
        200: '#DDA47C'
      },
      'slate': {
        10: '#fff',
        50: '#f8fafc',
        100: '#f1f5f9'
      },
      'zinc': {
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        700: '#3f3f46'
      }
    }
  },
  plugins: [],
} satisfies Config;
