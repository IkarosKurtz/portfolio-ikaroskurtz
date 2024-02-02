/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'algae-green': {
					'50': '#f0fdf5',
					'100': '#dcfce9',
					'200': '#bbf7d4',
					'300': '#81eeb0',
					'400': '#4ade8a',
					'500': '#22c569',
					'600': '#16a354',
					'700': '#158044',
					'800': '#166539',
					'900': '#145331',
					'950': '#052e19',
				},
				'text-w': '#f0fdf5',
				'text-b': '#166539',
			}
		},
	},
	plugins: [],
}
