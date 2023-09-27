/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				rubrik: ["Rubrik", "sans-serif"],
				nce: ["Noto Color Emoji", "Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
