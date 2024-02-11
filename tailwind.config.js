/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulServe': '#08213f',
        'rojoServe': '#9B2D5B'
      },
    },
  },
  plugins: [],
}
