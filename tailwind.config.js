/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'tv': { max: "1200px" },
      'pc': { max: "992px" },
      'laptop': { max: "768px" },
      'tablet': { max: "640px" },
      'iphone': { max: "480px" },
      'galaxy': { max: "360px" },
      'ipad': { max: "320px" },
    },
    fontFamily: {
      'iransans': 'irsans'
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      gray: {
        100: "#FAFAFA",
        200: "#F1F2F7",
        300: "#BABABA",
        400: "#262B37",
      },
      blue: {
        100: "#BCEAFF",
        200: "#B2C9F9",
        300: "#22B9FF",
        400: "#008FFB",
        500: "#004DEB",
      },
      green: {
        100: "#B7E9CD",
        200: "#00E396",
        500: "#10B759",
      },
      red: {
        100: "#FFC5C5",
        500: "#FF3F3F",
      },
      orange: {
        100: "#FFB822",
        200: "#FEB019",
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }, 
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--c) calc(var(--p) * 1%), #F1F2F7 0)',
        'mountain': "url('./../public/assets/images/mountain.png')",
      }
    },
  },
  plugins: [],
};
