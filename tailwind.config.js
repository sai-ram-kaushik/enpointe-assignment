/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#121829",
        primary: "#fff",
        secondary: "#7C6EF6",
        whiteShade: "#767e94"
      },

      fontFamily: {
        bodyContent: "Poppins",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
