import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    extend: {
      backgroundImage: {
        hero:"url('/assets/hero/hero-overlay.png')",
        opening_hours:"url('/assets/opening-hours/bg.png')",
        footer:"url('/assets/footer/bg.png')",


        // example:
        // "hero-pattern": "url('/images/hero-bg.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondary: {
          DEFAULT: "#100e0e",
        },
        accent:{
          DEFAULT: "#100e0e",
          hover: "#100e0e",
          
        }

      },
      fontFamily: {
        primary: ["var(--font-cormorant-upright)"],
        secondary: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
