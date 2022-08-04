/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightGreen: '#41cd52',
        lightGray: '#f8f8f8',
      },
      backgroundImage: {
        jumbotron: "url('../images/jumbotron.jpg')",
      },
    },
  },
  plugins: [],
}
