/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundcolor: "#EFDCAB",
        textcolor: "#1A4D2E",
        hovertextcolor: "#30b50b",
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  daisyui: {
  },
  plugins: [require("daisyui")],
}

