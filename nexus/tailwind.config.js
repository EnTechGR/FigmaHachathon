/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'game-black': '#050505',
        'game-red': {
          800: '#630606',
          900: '#3F0000',
          950: '#1A0000',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(200, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};