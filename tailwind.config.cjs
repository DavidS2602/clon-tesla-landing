/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			mobile: { max: '639px' },
			tablet: { max: '1023px' },
		},
		fontFamily: {
			gotham: ["Gotham SSm", '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', 'sans-serif'],
		},
		fontWeight: {
			medium: 500,
			bold: 600,
		},
		extend: {},
	},
	plugins: [],
}
