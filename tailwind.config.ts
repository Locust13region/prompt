import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				secondary: "#969AF7",
				"secondary-light": "#BDC0FF",
				footerBG: "#333333",
			},
			backgroundImage: {
				"home-section-1": "url('/img/bg1-figure.svg'), url('/img/bg1.svg')",
				"benefit-card": "url('/img/card-bg.svg'), white",
				"home-section-3": "url('/img/bg3-figure.png'), url('/img/bg3.svg')",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				book: ["var(--font-futura-book-regular)"],
				futuris: ["var(--font-futura-futuris-regular)"],
				futurisBold: ["var(--font-futura-futuris-bold)"],
				demi: ["var(--font-futura-demi)"],
				light: ["var(--font-futura-light)"],
			},
		},
	},
	plugins: [],
};
export default config;
