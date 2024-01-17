/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      white: '#FFF',
      black: '#000',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',

      green500: '#00875F',
      green300: '#00B37E',
      green100: '#1EA483',

      purple300: '#7465D4',
    },
    fontSize: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  plugins: [],
}
