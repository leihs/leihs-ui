const path = require('path')
const createReactAppConfig = require('react-scripts/config/webpack.config.prod.js')

module.exports = Object.assign({}, createReactAppConfig, {
  entry: {
    'leihs-ui-server-side': './src/server-side.js',
    'leihs-ui-client-side': './src/client-side.js'
  },
  output: Object.assign({}, createReactAppConfig.output, {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // library: "LeihsUI",
    libraryTarget: 'umd'
  }),

  // DISABLE CHUNKS…
  optimization: Object.assign(
    {},
    createReactAppConfig.optimizationoptimization,
    {
      splitChunks: {}
    }
  )
})
