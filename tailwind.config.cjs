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
      keyframes: {
        "pop-home": {
          "0%": { opacity: 0 },
          "3%": { opacity: 1 },
          "10%": { opacity: 1 },
          "15%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        "arrow-home": {
          "0%": { bottom: "0.5rem", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { bottom: "0rem", opacity: 0 },
        },
      },
      animation: {
        "pop-home": "pop-home 10s ease-in-out",
        "arrow-home": "arrow-home 2s ease-in-out infinite",
      },
      listStyleType: {
        square: "square",
      },
      screens: {
        mobile: "500px",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        subTitle: ["var(--font-subTitle)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        paper: "url('/images/bg/Spel-officieel-background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
