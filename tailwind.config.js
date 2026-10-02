/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eafaff',
          100: '#d2f5ff',
          200: '#a8ebff',
          300: '#6bdcff',
          400: '#29c6ff',
          500: '#0ea5e9',
          600: '#0a83c5',
          700: '#0f659f',
          800: '#14547e',
          900: '#184767'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96,165,250,0.25), 0 16px 35px rgba(14,165,233,0.18)'
      }
    }
  },
  plugins: []
};
