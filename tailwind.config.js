module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          bricolage: ['Bricolage Grotesque', 'sans-serif'],
          open: ['Open Sans', 'sans-serif']
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '985px' },
      md: { max: '889px' },
      sm: { max: '519px' },
      xs: { max: '459px' },
      '2xs': { max: '401px' },
    },
  },
  plugins: [],
}
