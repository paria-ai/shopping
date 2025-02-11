import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       sabz:"#5B7052",
       bezh:"#D1A682",
       kerem:'#F2ECE4',
       meshki:"#2D2D2D"
      },
    },
  },
  plugins: [],
} satisfies Config;
