/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#7D8920",
          100: "#191b06",
          200: "#32370d",
          300: "#4a5213",
          400: "#636d1a",
          500: "#7d8920",
          600: "#afc02d",
          700: "#c9d859",
          800: "#dbe590",
          900: "#edf2c8",
        },
        seasalt: {
          DEFAULT: "#F8F7F7",
          100: "#352e2e",
          200: "#6a5c5c",
          300: "#9c8d8d",
          400: "#cac2c2",
          500: "#f8f7f7",
          600: "#f9f8f8",
          700: "#fbfafa",
          800: "#fcfcfc",
          900: "#fefdfd",
        },
        cool_gray: {
          DEFAULT: "#7E869D",
          100: "#181a20",
          200: "#303440",
          300: "#484e60",
          400: "#606880",
          500: "#7e869d",
          600: "#969db0",
          700: "#b1b5c4",
          800: "#cbced8",
          900: "#e5e6eb",
        },
        dark_moss_green: {
          DEFAULT: "#4D5717",
          100: "#101205",
          200: "#202309",
          300: "#2f350e",
          400: "#3f4713",
          500: "#4d5717",
          600: "#879728",
          700: "#b8cd42",
          800: "#d0de81",
          900: "#e7eec0",
        },
        dogwood_rose: {
          DEFAULT: "#CA2F62",
          100: "#280914",
          200: "#511328",
          300: "#791c3b",
          400: "#a2264f",
          500: "#ca2f62",
          600: "#d75681",
          700: "#e181a1",
          800: "#ebabc0",
          900: "#f5d5e0",
        },
        puce: {
          DEFAULT: "#CF8A9A",
          100: "#31141b",
          200: "#622836",
          300: "#943c51",
          400: "#bc5a71",
          500: "#cf8a9a",
          600: "#d9a2af",
          700: "#e3b9c3",
          800: "#ecd1d7",
          900: "#f6e8eb",
        },
        drab_dark_brown: {
          DEFAULT: "#3C3918",
          100: "#0c0b05",
          200: "#171609",
          300: "#23210e",
          400: "#2f2c13",
          500: "#3c3918",
          600: "#787230",
          700: "#b5ac48",
          800: "#cec884",
          900: "#e7e4c2",
        },
        khaki: {
          DEFAULT: "#C2B29D",
          100: "#2b241b",
          200: "#574936",
          300: "#826d51",
          400: "#a79072",
          500: "#c2b29d",
          600: "#cec2b1",
          700: "#dad1c5",
          800: "#e7e0d8",
          900: "#f3f0ec",
        },
      },
    },
  },
  plugins: [],
};