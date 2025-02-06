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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',

        fontMainColor: 'var(--fontMainColor)',
        fontSecondary0Color: 'var(--fontSecondary0Color)',
        fontSecondary1Color: 'var(--fontSecondary1Color)',
        fontMainPaceholderColor: 'var(--fontMainPaceholderColor)',
        fontMainHoverColor: 'var(--fontMainHoverColor)',
        fontSecondary0HoverColor: 'var(--fontSecondary0HoverColor)',
        fontSecondary1HoverColor: 'var(--fontSecondary1HoverColor)',

        mainBackgroundLinear0Color: 'var(--mainBackgroundLinear0Color)',
        mainBackgroundLinear1Color: 'var(--mainBackgroundLinear1Color)',
        mainSvgPath0Color: 'var(--mainSvgPath0Color)',
        mainSvgPath1Color: 'var(--mainSvgPath1Color)',
        mainButton0Color: 'var(--mainButton0Color)',
        mainButton1Color: 'var(--mainButton1Color)',
        mainButton1SecondaryColor: 'var(--mainButton1SecondaryColor)',

        pageBackgroundColor: 'var(--pageBackgroundColor)',
        pageBackgroundSecondary0Color: 'var(--pageBackgroundSecondary0Color)',
        pageBackgroundSecondary1Color: 'var(--pageBackgroundSecondary1Color)',
        pageBackgroundMaskColor: 'var(--pageBackgroundMaskColor)',
        pageSvgPath0Color: 'var(--pageSvgPath0Color)',
        pageButton0Color: 'var(--pageButton0Color)',
/////////////////
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
