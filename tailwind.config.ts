import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poltawskiNowy: ["Poltawski Nowy", "sans-serif"],
        inter: ["inter", "sans"],
        poppins: ["Poppins", 'sans-serif']
      },
      fontWeight: {
        "light": "200",
        "normal": "400",
        "semibold": "600",
        "bold":"700"
      },
      colors: {
       background: "var(--background)",
      foreground: "var(--foreground)",
       primarycolor: "#0D111D",
        primary50: "rgba(255, 255, 255, 0.1)", // White with 50% opacity
        primary60: "rgba(255, 255, 255, 0.2)", // White with 50% opacity
      primary80: "rgba(255, 255, 255, 0.5)"
},

    },
  },
  plugins: [],
} satisfies Config;
