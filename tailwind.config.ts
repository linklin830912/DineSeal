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
      },
      fontSize: {
        'h1': '2.5rem', // Example: 40px
        'h2': '1.875rem', // Example: 36px
        'h3': '1.25rem', // Example: 32px
        'h4': '0.875rem', 
        'h5': '0.8125rem',
        'h6': '0.75rem',
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
