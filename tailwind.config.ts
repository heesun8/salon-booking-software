import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
} satisfies Config;
