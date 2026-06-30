/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          brand: '#B8742A',
          light: '#F5EDE0',
        },
        cream: '#FAF8F5',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
