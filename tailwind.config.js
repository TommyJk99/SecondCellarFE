/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      thema1: "#FFBBFF",
      thema2: "#FD7FE8",
      thema3: "#BF4497",
      thema4: "#810947",
      thema5: "#ff8000",
      thema6: "#0075FF",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      borderRadius: {
        custom1: "30% 70% 78% 22% / 30% 60% 40% 70% ",
        custom2: "32% 68% 42% 58% / 57% 47% 53% 43% ",
        custom3: "58% 42% 51% 49% / 57% 32% 68% 43% ",
        custom4: "15% 11% 17% 12% / 40% 26% 67% 42%  ",
        custom5: "36% 64% 51% 49% / 46% 46% 54% 54% ",
      },
      animation: {
        pulse: "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.40)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
