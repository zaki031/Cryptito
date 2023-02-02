/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],

  theme: {
    extend: {
      colors:{
        'light_bg': '#F6F9FC',
        'dark_bg':'#0A2540',
        'main_color':'#73e4fd',
        'hover_dark':'#183d62', 
  'brighter_main':'#93e5f8',
        'nigg':'#91d9e9',
      },
      backgroundImage: {
        'hero': "url('../public/bg.jpg')",
      },
    },
  },
  plugins: [],
}