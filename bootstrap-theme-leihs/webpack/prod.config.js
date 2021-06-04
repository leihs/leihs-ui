const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: { 'bootstrap-leihs': './bootstrap-leihs.scss' },
  output: {
    path: __dirname + '/../build',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                plugins: function() {
                  // post css plugins, can be exported to postcss.config.js
                  return [require('precss'), require('autoprefixer')]
                }
              }
            }
          },
          'sass-loader'
        ]
      },

      // images
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 1000000, // this is 100x the recommendation, force inline for now
          name: 'static/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })]
}
