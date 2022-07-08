/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'cfh-dark-red': '#3f0026',
      'cfh-light-orange': '#ff7b31'
    },
  },
  plugins: [],
}