/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
			'cobalt': {
			  DEFAULT: '#0A1F8F',
			  50: '#E0EBFC',
			  100: '#C9DDF9',
			  200: '#9BC0F4',
			  300: '#6DA3EF',
			  400: '#3F86EA',
			  500: '#186ADE',
			  600: '#1354B0',
			  700: '#0E3E82',
			  800: '#092854',
			  900: '#041226'
			}
		  },
		},
	},
	plugins: [],
}
