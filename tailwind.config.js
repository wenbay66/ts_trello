/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'system-blue': '#243c5a',
      },
      keyframes: {
        aaa: {
          'from': { width: '0vw' },
          'to': { width: '10vw' },
        },
        bbb: {
          'from': { width: '10vw' },
          'to': { width: '0vw' },
        },
      },
      animation: {
        aaa: 'aaa 1s ease-in-out alternate',
        bbb: 'bbb 1s ease-in-out alternate',
      }
    },
  },
  plugins: []
}
