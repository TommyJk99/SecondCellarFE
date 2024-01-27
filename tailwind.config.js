/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      thema1: "#FFBBFF",
      thema2: "#FD7FE8",
      thema3: "#BF4497",
      thema4: "#810947",
      thema5: "#DB5800",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
      },
      animation: {
        "border-wave": "borderWave 14s infinite ease-in-out",
        shake: "shake 2s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [],
};
