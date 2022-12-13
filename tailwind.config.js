/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme": "#1355ff",
        "themeDark": "#1a1a1a",
        "themeWhite": "#f8f8f8"
      },
      fontFamily: {
        'helvetica': ['HelveticaNowDisplay', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
      }
    },
  },
  plugins: [],
};
