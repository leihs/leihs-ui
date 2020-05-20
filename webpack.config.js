const path = require('path')
const createReactAppConfigFactory = require('react-scripts/config/webpack.config.js')
const createReactAppConfig = createReactAppConfigFactory(
  process.env['NODE_ENV'] === 'production' ? 'production' : 'development'
)

module.exports = Object.assign({}, createReactAppConfig, {
  entry: {
    main: './src/.emptyDummy.js', // ignored, but must be present so CRA works…
    'leihs-ui-client-side': './src/client-side.js',
    'leihs-ui-server-side': './src/server-side.js'
  },

  output: Object.assign({}, createReactAppConfig.output, {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // library: 'LeihsUI',
    libraryTarget: 'umd'
  }),

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },

  // DISABLE CHUNKS…
  optimization: {}
})
