import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
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
  plugins: [typography],
  animation: {
    floating: "floatUpDown 15s ease-in-out infinite",
  },
  keyframes: {
    floatUpDown: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
    },
  },
  safelist: [
    // Add all possible gradient colors
    "from-purple-500",
    "via-pink-400",
    "to-purple-600",
    "from-pink-500",
    "via-purple-400",
    "to-pink-600",
    "from-yellow-400",
    "via-pink-400",
    "to-purple-500",
    "text-yellow-400", // Also safelist text colors if needed
    "text-yellow-500",
    // ... any other dynamically used colors
  ],
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
