/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#003366',
        'slate-grey': '#6D7B8D',
        'amber-gold': '#FFBF00',
      },
    },
  },
  plugins: [],
};