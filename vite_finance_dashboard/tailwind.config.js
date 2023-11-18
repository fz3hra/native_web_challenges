/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'placeholder-lg': '1.25rem', // Example size
        'placeholder-sm': '0.875rem', // Example size
      }
    },
  },
  variants: {
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.placeholder-lg::placeholder': {
          fontSize: theme('fontSize.placeholder-lg'),
        },
        '.placeholder-sm::placeholder': {
          fontSize: theme('fontSize.placeholder-sm'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

