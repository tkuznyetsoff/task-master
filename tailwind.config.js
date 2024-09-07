/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: [
		{
			pattern: /(bg|text|border)-(\w+)-(100|600)$/
		}
	]
}
