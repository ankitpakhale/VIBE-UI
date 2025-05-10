import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx",
    "./src/components/**/*.{js,ts,jsx,mdx",
    "./src/app/**/*.{js,ts,jsx,mdx",
  ],
  darkMode: "class",
  theme: {
    extends: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};

export default config;
