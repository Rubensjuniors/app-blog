/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)'
      },
      colors: {
        primary: '#1D232A',
        segundary: '#15191C',
        menuText: '#85898C',
        ultils: '#2F2F2F',
        default_text: '#E1E1E6',
        oragen: '#f25d1d',
        card: '#404040'
      },
      spacing: {
        '0-auto': ['0px', 'auto']
      },
      width: {
        content: 'min(800px, 100%)'
      },
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '960px',
        // => @media (min-width: 960px) { ... }

        xl: '1440px'
        // => @media (min-width: 1440px) { ... }
      }
    }
  },
  plugins: []
}
