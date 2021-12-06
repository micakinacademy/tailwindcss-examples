module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'car': "url('./assets/images/emma.jpg')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
