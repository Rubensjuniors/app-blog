/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D232A',
        segundary: '#15191C',
        menuText: '#85898C',
        ultils: '#2F2F2F',
        default_text: '#E1E1E6'
      },
      spacing: {
        '0-auto': ['0px', 'auto']
      },
      width: {
        content: 'min(800px, 100%)'
      },
      fontFamily: {
        Roboto: 'Roboto'
      }
    }
  },
  plugins: []
}
