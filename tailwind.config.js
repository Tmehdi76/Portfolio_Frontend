/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'background': 'var(--color-background)',
        'text-gray': 'var(--color-text-gray)',
        'text-white': 'var(--color-text-white)',
        'surface': 'var(--color-surface)',
        'border': 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Fira Code', 'sans-serif'],
      },
      height: {
        '120vh': '135vh',
      },
  },
  plugins: [],
  }
};
