import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			colors: {
				'dark-color': 'rgba(6, 5, 15, 1)',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				mono: ['var(--font-roboto-mono)'],
			},
		},
  },
  plugins: [],
};
export default config;
