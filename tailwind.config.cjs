/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#23232c",
          200: "#15151b",
        },
      },

      fontFamily: {
        edu: ["Edu VIC WA NT Beginner", "cursive"],
      },
    },
  },
  plugins: [],
};
