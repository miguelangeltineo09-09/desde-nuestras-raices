// @ts-check
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crema: 'var(--crema)',
        oliva: 'var(--oliva)',
        terracota: 'var(--terracota)',
        amarillo: 'var(--amarillo)',
        marron: 'var(--marron)',
        blanco: 'var(--blanco)',
        'oliva-suave': 'var(--oliva-suave)',
        'terracota-suave': 'var(--terracota-suave)',
        'amarillo-suave': 'var(--amarillo-suave)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
