module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        l: `22rem`,
        xl: `28rem`,
        xxl: `38rem`,
        xxxl: `43rem`,
      },
      zIndex: {
        negative: -1,
      },
      fontFamily: {
        grand: [`Grandstander`],
      },
      backgroundColor: theme => ({
        lighterBlack: `#202020`,
      }),
    },
  },
  variants: {},
  plugins: [],
};
