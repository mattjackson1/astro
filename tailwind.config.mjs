/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
			'cobalt': {
			  DEFAULT: '#0A1F8F',
			  900: '#081972'
			}
		  },
		},
	},
	plugins: [],
}
