/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#a83e1d",
      secondary: "#ecdecf",
      "black-100": "#000000",
    },
    extend: {
      listStyleType: {
        square: "square",
      },
      screens: {
        mobile: "500px",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        paper: "url('/images/bg/Spel-officieel-background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
