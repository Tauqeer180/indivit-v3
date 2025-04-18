import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-5": "768px",
        xs: "576px",
        xxs: "480px",
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

