/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E74833",
        secondary: "#f0e68c",
        light: "#90AEAE",
        dark: "#244856",
        medium: "#FBE9D1",
      },
    },
    plugins: [],
  },
};
