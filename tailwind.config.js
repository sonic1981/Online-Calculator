/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'ee-blue': '#1795d4',
        'white-smoke': '#f5f5f5',
        'screen': '#e2e5df'
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'orbitron': ['Orbitron', 'sans-serif', 'Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
