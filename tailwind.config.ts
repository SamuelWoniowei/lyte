import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { redHat: ["var(--font-red-hat)", "sans-serif"] },
      backgroundImage: {
        "welcome-gradient":
          "linear-gradient(to right, rgba(255, 218, 104, 1), rgba(203, 102, 134, 1))",
        "lyte-name-gradient":
          "linear-gradient(to right, #000 10%, rgba(203, 102, 134, 1) 10%)",
        "hosting-name-gradient":
          "linear-gradient(to right, rgba(203, 102, 134, 1), rgba(235, 123, 48, 1))",
        "map-background": "url(/images/map.svg)",
      },
      screens: {
        'custom-xl': '1240px', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand1: "rgba(203, 102, 134, 1)",
        brand2: "rgba(30, 34, 47, 1)",
        black0: "rgba(30, 34, 47, 1)",
        grey0: "rgba(25, 24, 37, 0.75)",
        grey1: "rgba(224, 226, 230, 1)",
        grey2: "rgba(102, 109, 128, 1)",
        grey3: "rgba(164, 172, 185, 0.24)",
        grey4: "rgba(249, 250, 252, 1)",
        grey5: "rgba(211, 223, 235, 1)",
        grey6: "rgba(217, 219, 233, 1)",

      },
    },
  },
  plugins: [],
} satisfies Config;
