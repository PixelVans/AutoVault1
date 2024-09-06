

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'supercar': "url('./images/supercars.png')",
        'bus': "url('/images/busesss.jpg')",
        'el': "url('/images/electicc.jpg')",
        'ell': "url('/images/electiccc.jpg')",
        'suv': "url('/images/suvvv.jpg')",
        'truck': "url('/images/trucksss.jpg')",
        'theme': "url('/images/theme.jpg')",
        'shake': "url('/images/shake.png')",
        'spedom': "url('/images/spedom.png')",
        'dash': "url('/images/dash.png')",
      
      },
      animation: {
        rotate: 'rotate 4s linear infinite',
        rot: 'rotate 8s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
