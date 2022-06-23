/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'calando': '#3498db',
      'White': 'hsl(0, 0%, 100%)',
      'DarkDesaturatedBlue' : 'hsl(228, 28%, 20%)',
      'VeryDarkBlue': 'hsl(230, 17%, 14%)',
      'VeryDarkBlue2': 'hsl(232, 19%, 15%)',
      'LightGrayishBlue' : 'hsl(227, 47%, 96%)',
      'DarkGrayishBlue' : 'hsl(228, 12%, 44%)',
      'Facebook' : 'hsl(208, 92%, 53%)',
      'Twitter' : 'hsl(203, 89%, 53%)',
      'Youtube' : 'hsl(348, 97%, 39%)',
      'Bueno' : 'hsl(163, 72%, 41%)',
      'Malo' : 'hsl(356, 69%, 56%)'
    },
  },
  plugins: [],
}
