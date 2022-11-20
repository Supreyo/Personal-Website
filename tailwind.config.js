/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        header: '#DEE5E6'
      },

      backgroundImage: {
        headerBackground: "url('./assets/HeaderBackground.jpg')"
      }
    },
  },
  plugins: [],
}
