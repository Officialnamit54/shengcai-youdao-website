import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1c24",
        navy: "#1f2937",
        ocean: "#eb1d27",
        brand: "#eb1d27",
        rose: "#fff1f2",
        gold: "#d8a031",
        mint: "#2f9d7e",
        mist: "#f8f5f4"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(128, 30, 36, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
