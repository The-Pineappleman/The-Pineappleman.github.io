/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'impact': ['Oswald']
    }
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        tamuforest: '#2B5233',
        tamumaroon: '#500000',
        cat1: '#FFB333',
        cat2: '#DB8902',
        cat3: '#ADCB41',
        cat4: '#67823A',
        cat5: '#533B2C',
        cat6: '#500000',
        tamugray: '#F8F8F8F8'
      }
    }
  },
  daisyui: {
    themes: ['bumblebee']
  }
}

