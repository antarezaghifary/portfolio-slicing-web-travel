/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        Circular: ["Circular STD"],
      },
      colors: {
        purple: "#5D50C6",
        pink: "#F85E9F",
        orange: "#FF5722",
        textnav: "#191825",
      },
      dropShadow: {
        "sm-shadow": [
          "0px 548px 219px rgba(0,0,0,0.01)",
          "0px 308px 185px rgba(0,0,0,0.04)",
          "0px 137px 137px rgba(0,0,0,0.06)",
          "0px 34px 75px rgba(0,0,0,0.07)",
          "0px 0px 0px rgba(0,0,0,0.07)",
        ],
        "lg-shadow": [
          "0px 548px 219px rgba(0,0,0,0.01)",
          "0px 308px 185px rgba(0,0,0,0.04)",
          "0px 137px 137px rgba(0,0,0,0.06)",
          "0px 34px 75px rgba(0,0,0,0.07)",
          "0px 0px 0px rgba(0,0,0,0.07)",
        ],
      },
    },
  },
  plugins: [],
};
