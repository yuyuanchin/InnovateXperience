// /** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     colors: {
//       'white': '#ffffff',
//       'black': '#000000',
//       'dark-blue': '#020a55',
//       'light-blue': '#00bbf0',
//     },
//     fontFamily: {
//       montserrat: ['Montserrat', 'sans-serif'],
//     },
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     themes: [
//       {
//         mytheme: {
//           "white": "#ffffff",
//           "black": "#000000",
//           "dark-blue": "#020a55",
//           "light-blue": "#00bbf0",
//         },
//       },
//     ],
//   },
// }

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1360px',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'dark-blue': '#020a55',
        'light-blue': '#00bbf0',
      },
      keyframes: {
        upDown: {
          "50%": { transform: "translateY(40px)" },
        },
      },
      animation: {
        "up-down": "upDown 4s ease-in-out infinite"
      },
      boxShadow: {
        'md': '0 0 7px 3px rgba(0, 187, 240, 0.7)',
      },
      translate: {
        '-1px': '-1px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00bbf0",
          "primary-focus": "#009bd4",
          "primary-content": "#ffffff",
          secondary: "#445aff",
          "secondary-focus": "#1e2cff",
          "secondary-content": "#ffffff",
          accent: "#6be1ff",
          "accent-focus": "#26cbff",
          "accent-content": "#ffffff",
          neutral: "#000000",
          "neutral-focus": "#e6e6e2",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f3f3f1",
          "base-300": "#e6e6e2",
          "base-content": "#000000",
        },
      },
    ],
  },
};