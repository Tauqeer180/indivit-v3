import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-5": "868px",
        xs: "576px",
        xxs: "480px",
        "2xl": "1400px",
      },
      borderRadius:{"2.5xl":"20px"},
      borderWidth:{
        '1':'1px',
        '3':"3px"
      },
      padding:{
"2.5":"10px",
"0.5":"2px"
      },
      fontFamily: {
        Greycliff: ['Greycliff CF', 'sans-serif'],
        Fontspring: ['FONTSPRING DEMO - Regular', 'sans-serif'],
        Epilogue: ['Epilogue', 'sans-serif'],
        "Epilogue-bold": ['Epilogue bold', 'sans-serif'],
      },
      colors: {
        // theme: "#359200", // old Theme Color
        theme: "#81CA00",
        "theme-orange": "#FE6703",
        "light-green": "#C2ECB4",
        "tea-green":"#DCE9C7",
        "dark":"#212529",
        "muted":"#4B5563",
        "light-orange":"#faf4d1",
        "green":"#bfeab3",
      },
      boxShadow: {
        around: "0 0 25px -5px rgba(0, 0, 0, 0.1)", // Customize as needed
      },
      backgroundImage: {
        mixer: "url('/assets/img/Ingredients-hero-2.png')",
        faq: "url('/assets/img/hero-faqs-2.png')",
        contact: "url('/assets/img/contact-banner-bg-2.png')",
        about: "url('/assets/img/about-banner-bg-2.png')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
};

export default config

