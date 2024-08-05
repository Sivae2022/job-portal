/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3c614",
        secondary: "#353535",
        danger: "#ff0000",
        light: "#f9f9f9",
        dark: "#121212",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}
