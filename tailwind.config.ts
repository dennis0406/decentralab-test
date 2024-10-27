import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '13px',
      '2xl': '24px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Anuphan: ['Anuphan', 'serif'],
       },
    },
    colors: {
      black: '#3EA2F400',
      blackPurple: '#423EF41A',
      blueLight: '#97CFFD',
      darkBlue: '#313856',
    },
  },
  plugins: [],
};
export default config;
