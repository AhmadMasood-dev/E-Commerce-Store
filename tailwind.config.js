/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7444e",
        secondary: "#D4D2D3",
        light: "#90AEAE",
        dark: "#002c3e",
        medium: "#FBE9D1",
      },
    },
    plugins: [],
  },
};
