import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '13px',
      lg: '16',
      '2xl': '24px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        Anuphan: ['Anuphan', 'serif'],
      },
      backgroundImage: {
        'custom-conic-gradient': `conic-gradient(from 124.76deg at 49.86% 36.95%, #A185F4 -5.64deg, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 354.35deg, #ABECA2 360.06deg)`,
        'custom-linear-gradient': `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.01%, rgba(4, 9, 20, 0.2) 31.13%, rgba(255, 255, 255, 0.2) 110.67%)`,
      },
      backgroundBlendMode: {
        overlay: 'overlay',
      },
    },
    colors: {
      black: '#3EA2F400',
      white: '#ffff',
      gray: '#CFCFCF00',
      blackPurple: '#423EF41A',
      blueLight: '#97CFFD',
      blue: '#264F95',
      blueStroke: '#4EAEFD',
      blueDarkOpacity: '#0B0E1800',
      darkBlue: '#313856',
    },
  },
  plugins: [],
};
export default config;
