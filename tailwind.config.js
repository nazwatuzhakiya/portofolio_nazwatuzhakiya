/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#093C5D',
        'teal': '#3B7597',
        'mint': '#5DF8D8',
        'cream': '#F5DAA7',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}
