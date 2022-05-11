// 경로: 루트 디렉토리/vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  },

  transpileDependencies: [
    'vuetify'
  ]
}
