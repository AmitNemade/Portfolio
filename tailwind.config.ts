import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "1": "0 2px 4px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 0px 0px #00000050",
          },
          "50%": {
            boxShadow: "0 0 5px 5px #00000050",
          },
          "100%": {
            boxShadow: "0 0 0px 0px #00000050",
          },
        },
        glowDark: {
          "0%": {
            boxShadow: "0 0 0px 0px #FFFFFF50",
          },
          "50%": {
            boxShadow: "0 0 5px 5px #FFFFFF50",
          },
          "100%": {
            boxShadow: "0 0 0px 0px #FFFFFF50",
          },
        },
      },
      animation: {
        glow: "glow 2s infinite",
        glowDark: "glowDark 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
