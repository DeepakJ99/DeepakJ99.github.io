/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #ff00ff' },
          '50%': { boxShadow: '0 0 20px #ff00ff' },
        },
      },
    },
  },
  plugins: [],
}
