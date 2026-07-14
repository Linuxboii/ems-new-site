/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand navy — pulled from the EMS Technologies logo mark (#15527c).
        brand: {
          50: '#eef5fa', 100: '#d5e6f1', 200: '#aecde1', 400: '#4a8bb5', 500: '#15527c',
          600: '#114467', 700: '#0d3450', 900: '#08202f',
        },
        // Teal — from the logo's ISO 9001 certification rule (#0d5046).
        teal: {
          50: '#e9f5f2', 100: '#c9e7e0', 400: '#2a9d87', 500: '#0d5046', 600: '#0a3f37', 700: '#083029',
        },
        accent: { 500: '#0d5046', 600: '#0a3f37' },
        // Semantic tokens — driven by CSS vars so the theme toggle can flip them.
        paper: 'rgb(var(--c-paper) / <alpha-value>)',   // page background
        surface: 'rgb(var(--c-surface) / <alpha-value>)', // card / panel background
        ink: 'rgb(var(--c-ink) / <alpha-value>)',       // primary text
        muted: 'rgb(var(--c-muted) / <alpha-value>)',   // secondary text
        line: 'rgb(var(--c-line) / <alpha-value>)',     // hairline borders
        accent2: 'rgb(var(--c-accent) / <alpha-value>)', // links / active (theme-aware blue)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: { label: '0.2em' },
      maxWidth: { content: '1180px' },
    },
  },
  plugins: [],
};
