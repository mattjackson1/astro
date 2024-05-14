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
	plugins: [
		require('@tailwindcss/forms'),
		function ({ addComponents }) {
			addComponents({
				'input, select': {
					transitionDuration: '200ms',
					'&:not(:disabled):hover': {
						borderColor: '#6b7280',
					}
				},
				'[type="checkbox"]': {
					width: '1.5rem',
					height: '1.5rem',
					color: '#2563eb',
					borderColor: '#d1d5db',
					borderRadius: '0.25rem',
					'&:disabled': {
						color: '#d1d5db'
					},
					'&:not(:disabled):hover': {
						cursor: 'pointer'
					}
				},
				'[type="text"]': {
					fontSize: '0.875rem',
					padding: '0.5rem 0.75rem',
					borderColor: '#d1d5db',
					borderRadius: '0.25rem',
					'&:disabled': {
						background: '#f3f4f6',
						color: '#6b7280',
					}
				},
				'select': {
					fontSize: '0.875rem',
					borderColor: '#d1d5db',
					borderRadius: '0.25rem',
				},
				'th, td': {
					padding: '0.5rem',
				}
				
			});
		},
	],
}
