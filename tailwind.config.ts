import { type Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rondal: ['rondal'],
        // rondal: ['rondal', 'Arial', ...defaultTheme.fontFamily.sans], this made my css rondal font declarations in global.css meaningless(??) font i snot working even though they are commented out  ,
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
        50: '#f8fafc',
        100: '#f1f5f9'
      }
    }
  },
  plugins: [],
} satisfies Config;
