const path = require('path')
const exec = require('child_process').exec
const createReactAppConfigFactory = require('react-scripts/config/webpack.config.js')
const createReactAppConfig = createReactAppConfigFactory(
  process.env['NODE_ENV'] === 'production' ? 'production' : 'development'
)

// NOTE: export 2 configs:
// * server-side library, for usage in nodejs, with bundled React
// * client-side library, for importing into browser code, without bundled React (the consuming app provides the correct version)

const baseConfig = Object.assign({}, createReactAppConfig, {
  output: Object.assign({}, createReactAppConfig.output, {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // library: 'LeihsUI',
    libraryTarget: 'umd'
  }),

  plugins: (createReactAppConfig.plugins || []).concat([
    {
      apply: compiler => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
          exec(
            'test -f ../src/client/leihs/borrow/app.cljs && touch ../src/client/leihs/borrow/app.cljs',
            (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout)
              if (stderr) process.stderr.write(stderr)
            }
          )
        })
      }
    }
  ]),

  // DISABLE CHUNKS…
  optimization: {}
})

const externalsConfig = {
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
  }
}

module.exports = [
  // all the bundles, server-side
  {
    ...baseConfig,
    target: 'node',
    entry: {
      main: './src/.emptyDummy.js', // ignored, but must be present so CRA works…
      'leihs-ui-server-side': './src/server-side.js'
    }
  },
  // all the bundles, client-side
  {
    ...baseConfig,
    target: 'web',
    entry: {
      main: './src/.emptyDummy.js', // ignored, but must be present so CRA works…
      'leihs-ui-client-side': './src/client-side.js'
    }
  },
  // all the bundles, with external react
  {
    ...baseConfig,
    target: 'web', // its the default, but just to be explicit…
    entry: {
      main: './src/.emptyDummy.js', // ignored, but must be present so CRA works…
      'leihs-ui-client-side-external-react': './src/client-side.js'
    },
    ...externalsConfig
  },
  // just the UI components lib
  {
    ...baseConfig,
    entry: {
      main: './src/components-bundle.js'
    },
    output: Object.assign({}, baseConfig.output, {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ui-components/index.js',
      // library: "LeihsUI",
      libraryExport: 'default',
      libraryTarget: 'umd'
    }),
    ...externalsConfig
  }
]
