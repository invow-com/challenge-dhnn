import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1300px",
      },
      colors: {
        gray: {
          100: "#FAFAFA",
          300: "#505050",
          500: "#9e9e9e",
          700: "#616161",
          900: "#212121",
        },
        primary: {
          700: "#0451DD",
          900: "#00208A",
        },
        white: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["DIN Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
