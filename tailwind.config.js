/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      thema1: "#FFBBFF",
      thema2: "#FD7FE8",
      thema3: "#BF4497",
      thema4: "#810947",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
      },
      animation: {
        "border-wave": "borderWave 12s infinite linear",
        shake: "shake 2s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [],
};
