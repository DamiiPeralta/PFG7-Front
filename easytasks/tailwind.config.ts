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
        "blue-dark": "#1e3a8a",
        "blue-medium": "#60a5fa",
        "blue-light": "#3b82f6",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #29338D 0%, #414BA3 24%, #6249AB 49%, #5F98DF 100%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
