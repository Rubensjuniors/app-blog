/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      colors: {
        'gray-100': '#E1E1E6',
        'gray-300': '#C4C4CC',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202024',
        'gray-900': '#121214',

        'green-300': '#00B37E',
        'green-500': '#00875F',
        'green-700': '#015F43',

        'red-300': '#F75A68',
        'red-500': '#AB222E',
        'red-700': '#7A1921',
      },
      spacing: {
        '0-auto': ['0px', 'auto'],
      },
      width: {
        content: 'min(850px, 100%)',
      },
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '960px',
        // => @media (min-width: 960px) { ... }

        xl: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      keyframes: {
        'slide-enter': {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '01' },
        },
      },
      animation: {
        'slide-enter': 'slide-enter .4s',
      },
    },
  },
  plugins: [],
}
