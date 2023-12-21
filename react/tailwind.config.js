/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors:{
            'subBg' : '#1D5B61',
            'main' : '#054950',
        }
    },
  },
  plugins: [],
}

