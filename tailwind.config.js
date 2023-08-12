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
        oragen: '#f25d1d'
      },
      spacing: {
        '0-auto': ['0px', 'auto']
      },
      width: {
        content: 'min(800px, 100%)'
      }
    }
  },
  plugins: []
}
