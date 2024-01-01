/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif']
      },
      colors: {
        "green-primary": "#00985b",
        "green-secondary": "#07C378",
        "black-text": "#292929",
        "gray-paragraf": "#B0B0B0",
        "gray-title": "#545454"
      },
      backgroundImage: {
        'green-ornamen': "url('/img/ornamen-green.svg')",
      }
    },
  },
  plugins: [],
}

