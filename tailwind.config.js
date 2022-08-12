/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cream': 'hsl(27, 66%, 92%)',
        'red': 'hsl(10, 79%, 65%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'pale-orange': '#FF9B86',
        'cyan': 'hsl(186, 34%, 60%)',
        'hover-cyan': '#B4E0E5'
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
