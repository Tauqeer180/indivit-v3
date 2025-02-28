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
      colors: {
        // theme: "#359200", // old Theme Color
        theme: "#81CA00",
        "theme-orange": "#FE6703",
      },
      boxShadow: {
        around: "0 0 25px -5px rgba(0, 0, 0, 0.1)", // Customize as needed
      },
      backgroundImage: {
        mixer: "url('/src/assets/img/Ingredients-hero-2.png')",
        faq: "url('/src/assets/img/hero-faqs-2.png')",
        contact: "url('/src/assets/img/contact-banner-bg-2.png')",
        about: "url('/src/assets/img/about-banner-bg-2.png')",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
};

export default config

