const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'bootstrap-leihs-mobile': './bootstrap-leihs-mobile.scss'
  },
  output: {
    path: __dirname + '/../build',
    filename: '[name].js'
  },
  devtool: 'source-map',
  optimization: {},
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
                plugins: [['autoprefixer', {}]]
              }
            }
          },
          'sass-loader'
        ]
      },

      // plain css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // fonts
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource'
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
