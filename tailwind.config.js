/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      DEFAULT:'375px',
    },
    extend: {
      backgroundImage:{
        "bgChat" :"url('./assets/bgImage.png')",
      }
    },
      container: {
        center:true,
        padding: {
          DEFAULT:'1rem',
        }
      },
    },
  plugins: [],
}