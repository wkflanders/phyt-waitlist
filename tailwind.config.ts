import type { Config } from "tailwindcss";
const flattenColors = require('tailwindcss/src/util/flattenColorPalette');

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
        phyt_green: "#0DFF00",
        phyt_blue: "#0EF9FE",
      },
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
