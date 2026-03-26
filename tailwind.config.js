/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#5E7052', // Verde orgânico baseado no seu logo
          gold: '#D4AF37',  // Dourado para detalhes de luxo
          light: '#FAFAFA', // Off-white para um visual mais sofisticado que o branco puro
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Excelente para títulos de luxo
      }
    },
  },
  plugins: [],
}