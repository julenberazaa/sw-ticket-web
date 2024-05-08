/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
        'dark-bg': '#151515', 
        'red-nav': '#A91D3A',
        'pink-hover': '#77A6F7',
        'light-bg': '#77A6F7',
        'main-bg': '#FFFFFF',
        'nav-bg': '#77A6F7',     
        'secondary-light': '#D3E3FC', 
        'secondary-dark': '#77A6F7' 
      },
    },
  },
  plugins: [],
};
