/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: "0.7rem",
        micro: "0.6rem",
      },
      colors: {
        "brand-light": "#f1f4f7",
        "brand-dark": "#009ef7",
      },
      fill: {
        "brand-light": "#f1f4f7",
        "brand-dark": "#009ef7",
      },
    },
  },
  plugins: [],
};
