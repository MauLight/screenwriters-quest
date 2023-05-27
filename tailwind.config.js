/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
      secondary: 'Poppins',
      tertiary: 'Raleway',
    },
    extend: {},
    backgroundImage: {
      site: "url('./src/img/site-bg.jpg')",
    },
  },
  plugins: [],
}