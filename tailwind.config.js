// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'], // 👈 Déclaration ici
//       },
//     },
//   },
//   plugins: [
//     // require('@tailwindcss/forms'),
//   ],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
       
      },
      colors: {
        customRed: '#ac1e23',
        btnColor: "#0172F4",
        bgInput: "#F7FAFC",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
