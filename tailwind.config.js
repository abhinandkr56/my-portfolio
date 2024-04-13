/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1F1F1F',  // Adding a custom name for your color
      }
    },
  },
  plugins: [],
  darkMode: 'media'
}