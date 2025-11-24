/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // rich blue
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        gold: '#D4AF37',
        light: '#F8FAFC',
        text: '#1E293B',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}
