import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode using a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poltawskiNowy: ["Poltawski Nowy", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: "200",
        normal: "400",
        semibold: "600",
        bold: "700",
      },
      colors: {
        light: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          textwhite: "#FFFFFF",
          textcolor: "#0D111D",
          primarycolor: "#0D111D",
          primary50: "#FFFFFF1A",
          primary60: "#FFFFFF33",
          primary80: "#FFFFFF80",
        },
        dark: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          textcolor: "#FFFFFF",
          primarycolor: "#FFFFFF",
          primary10: "#FFFFFF0C",
          primary50: "#FFFFFF1A",
          primary60: "#FFFFFF33",
          primary80: "#FFFFFF80",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
