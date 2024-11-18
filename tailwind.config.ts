import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jakarta: ["JakartaSans", "sans-serif"],
      },
      // fontWeight :{
      //   light : 300,
      //   regular : 400,
      //   bold : 700
      // }
    },
  },
  plugins: [],
};
export default config;
