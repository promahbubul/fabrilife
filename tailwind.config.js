/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#2bb673",
        "gray-50": "#ebebeb",
        "gray-100": "#f3f3f3",
        "gray-200": "#e5e5e5",
        "gray-300": "#58595b",
        "gray-400": "#37383f",
        "gray-500": "#333333",
        "gray-600": "#eaeaea",
        blue: "#007bff",
        "blue-light": "#E0F7FA",
        "blue-100": "#04aeef",
        "blue-200": "#0275d8",
        black: "#373a3c",
        orange: "#f0ad4e",
        "orange-light": "#fcf4e9",
        "orange-100": "#f0ad4e",
        "orange-200": "#cc8119",
        accent: "#009688",
        "accent-light": "#ccf7f1",
      },
    },
  },
  plugins: [],
};
