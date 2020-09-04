const less = require('@remax/plugin-less')
const { RemaxIconfontPlugin } = require('remax-iconfont-plugin')

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [
    RemaxIconfontPlugin({
      // 将上面的CSS加入到此处
      cssURL: 'http://at.alicdn.com/t/font_1929963_1e4tsm7dso3.css',
    }),
    less({
      lessOptions: {
        globalVars: {
          'primary-color': '"#4569d4"',
        },
      },
    }),
  ],
}
