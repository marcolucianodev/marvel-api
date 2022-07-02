/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'grid-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      boxShadow: {
        'shadow-card': '0px 0px 15px 5px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);',
        'shadow-bottom': '0px 7px 0px -4px red, 0px 10px 15px -3px rgb(0 0 0 / 10%)'
      },
      width: {
        '250': '250px',
      },
      height: {
        '180': '180px',
      },
      colors: {
        'red-marvel': '#EC1D24',
        'black-marvel': '#202020'
      },
      borderRadius: {
        'border-btn' : '40px'
      },
    },
  },
  plugins: [],
}
