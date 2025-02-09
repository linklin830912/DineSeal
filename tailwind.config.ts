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
        backgroundColor0: 'var(--backgroundColor0)',
        backgroundColor1: 'var(--backgroundColor1)',
        backgroundColor2: 'var(--backgroundColor2)',
        buttonColor0: 'var(--buttonColor0)',
        buttonColor1: 'var(--buttonColor1)',
        buttonColor2: 'var(--buttonColor2)',
        svgFillColor0: 'var(--svgFillColor0)',
        svgFillColor1: 'var(--svgFillColor1)',
        svgStrokeColor0: 'var(--svgStrokeColor0)',
        svgStrokeColor1: 'var(--svgStrokeColor1)',
        fontColor0: 'var(--fontColor0)',
        fontColor1: 'var(--fontColor1)',
        
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '1.875rem',
        'h3': '1.25rem',
        'h4': '0.8rem', 
        'h5': '0.72rem',
        'h6': '0.6rem',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',  
      sm: '640px', 
      md: '768px', 
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
} satisfies Config;
