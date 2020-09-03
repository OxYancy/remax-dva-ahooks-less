const less = require('@remax/plugin-less')

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [
    less({
      lessOptions: {
        globalVars: {
          'primary-color': '"#4569d4"',
        },
      },
    }),
  ],
}
