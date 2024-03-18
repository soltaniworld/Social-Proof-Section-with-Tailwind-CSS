/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css","./index.html"],
  theme: {
    extend: {
      colors: {
        purpleish: '#512051',
        cardpink: '#F7F2F7',
        contactcard: '#512051',
        verified: '#EE69A4'
      },
      spacing: {
        '100': '400px'
      }
    },
  },
  plugins: [],
}

