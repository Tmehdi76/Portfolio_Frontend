/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00819A',
        'background': '#282C33',
        'text-gray': '#B1CDC7',
        'text-white': '#F5F5FA',
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
