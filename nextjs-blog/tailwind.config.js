/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./styles/src/**/*.{html,js,ts,js}',
    './components/*.{js, css}',
		"./pages/index.js"
	],
	darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

