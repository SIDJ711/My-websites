/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981',
          hover: '#059669',
        }
      },
      borderRadius: {
        container: '0.75rem',
      }
    },
  },
  plugins: [],
}
