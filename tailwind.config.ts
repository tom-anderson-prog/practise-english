import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13ec5b",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2c20",
        "text-main": "#111813",
        "text-muted": "#61896f",
      },
      fontFamily: {
        sans: ["Spline Sans", "sans-serif"],
        display: ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
