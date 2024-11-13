/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37", // Gold for primary accents
        black: "#000000", // Black background for vintage feel
        white: "#ffffff", // White for secondary text
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        luxury: "4px 4px 10px rgba(0, 0, 0, 0.5)", // Soft shadow for luxury look
      },
    },
  },
  plugins: [],
};

