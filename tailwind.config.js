/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mashanzhang: ['var(--mashanzhang-font)'],
        bonanova: ['var(--bonanova-font)'],
      },
    },
  },
  plugins: [],
};
