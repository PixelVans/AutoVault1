/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'supercar': "url('./public/images/supercars.png')",
        'bus': "url('./public/images/busesss.jpg')",
        'el': "url('./public/images/electicc.jpg')",
        'ell': "url('./public/images/electiccc.jpg')",
        'suv': "url('./public/images/suvvv.jpg')",
        'truck': "url('./public/images/trucksss.jpg')",
        'theme': "url('./public/images/theme.jpg')",
      },
    },
  },
  plugins: [],
}