import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f0ff",
          100: "#ede9fe",
          500: "#a78bfa",
          600: "#9333ea",
          700: "#7e22ce",
        },
        secondary: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
