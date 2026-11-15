/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F5D50",
        secondary: "#DCE8D9",
        background: "#F8F5EE",
        dark: "#242B27",
      },
    },
  },
  plugins: [],
}

