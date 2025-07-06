import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        // 🌞 Light Theme
        brand: {
          DEFAULT: "#9810fa", // bg-brand
          light: "#FFFFFF", // bg-brand-light
          dark: "#005BB5", // bg-brand-dark
        },
        background: {
          light: "#FFFFFF",
          dark: "#1a1a1a",
        },
        text: {
          light: "#1C2023",
          dark: "#f4f4f4",
        },
        lighterbg: {
          light: "#F6F8FA",
          dark: "#f4f4f4",
        },
      },
      fontFamily: {
        popoins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poltawskiNowy: ["var(--font-poltawskiNowy)", "sans-serif"],
      },
      screens: {
        xsm: { max: "360px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  animation: {
    floating: "floatUpDown 15s ease-in-out infinite",
  },
  keyframes: {
    floatUpDown: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
    },
  },
} satisfies Config;


/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class", // required for dark mode support
//   content: [
//       "./app/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
//   ],
 
//   plugins: [

//   ],
// };
