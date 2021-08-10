module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'day-mobile': "url('/assets/mobile/bg-image-daytime.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
