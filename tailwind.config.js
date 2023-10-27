/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cr-red': '#ed3736',
        'cr-gray': '#999',
        'cr-black': '#000000e6',

      },
    },
  },
  plugins: [],
}

