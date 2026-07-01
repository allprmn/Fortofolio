/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0b1120", // sangat gelap (background dark)
          800: "#14213d", // biru dongker gelap (card dark)
          700: "#1e3a8a", // biru dongker terang (aksen)
          600: "#2563eb", // biru cerah (hover/aksen)
        },
        light: {
          100: "#ffffff", // putih (background light)
          200: "#f1f5f9", // abu sangat tipis (card light)
        },
      },
    },
  },
  plugins: [],
};