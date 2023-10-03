/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./styles/src/**/*.{html,js,ts,js}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

