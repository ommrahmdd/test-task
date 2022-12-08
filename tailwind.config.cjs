/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#fb2576",
        secondaryColor: "#94a3b8",
        textColor: "#1e293b",
      },
    },
  },
  plugins: [],
};
