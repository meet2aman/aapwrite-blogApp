/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      proxima: ['"Proxima Nova"'],
      nunito: ['"Nunito"'],
      monserrat: ['"Montserrat"'],
    },
  },
  plugins: [],
};
