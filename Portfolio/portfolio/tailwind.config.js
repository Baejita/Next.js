const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|ripple|spinner).js"
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
        medium: ["60rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: 300,
        normal: 400,
        bold: 700,
      },
      colors: {
        primary: {
          50: "#FFF9F5",
          100: "#FFD2B3",
          200: "#FFB580",
          300: "#FFA666",
          400: "#FF8833",
          500: "#FF6A00",
          600: "#e65f00",
          700: "#BF5600",
          800: "#8F4100",
          900: "#783600",
          950: "#301600",
        },
        secondary: {
          50: "#E6EAEE",
          100: "#B3C1CD",
          200: "#8098AB",
          300: "#4D6E89",
          400: "#1A4568",
          500: "#003057",
          700: "#002646",
          800: "#001D34",
          900: "#001323",
          950: "#000A11",
        },
        tertiary: {
          300: "#FCA24E",
          400: "#FE8F27",
          500: "#FF8900",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },
    },
  },
  plugins: [nextui()],
};
