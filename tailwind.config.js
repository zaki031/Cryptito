/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light_bg': '#F6F9FC',
        'dark_bg':'#0A2540',
        'main_color':'#365BFF',
      },
      backgroundImage: {
        'hero': "url('../public/bg.jpg')",
      },
    },
  },
  plugins: [],
}