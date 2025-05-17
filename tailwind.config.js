module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // 👈 Déclaration ici
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
