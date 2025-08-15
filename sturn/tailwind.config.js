/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],   // para cuerpos de texto y UI
        serif: ['Merriweather', 'ui-serif', 'Georgia'],  // para títulos y branding
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'], // si necesitás código
      },
    },
  },
  plugins: [],
};
