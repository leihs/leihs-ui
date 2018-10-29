const path = require("path");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const createReactAppConfig = require("react-scripts/config/webpack.config.prod.js");

module.exports = Object.assign({}, createReactAppConfig, {
  entry: { "leihs-ui-server-side": "./src/server-side.js" },
  output: Object.assign({}, createReactAppConfig.output, {
    path: path.resolve(__dirname,  "dist"),
    filename: "[name].js",
    // library: "LeihsUI",
    libraryTarget: "umd"
  }),

  // DISABLE CHUNKS…
  optimization: Object.assign(
    {},
    createReactAppConfig.optimizationoptimization,
    {
      splitChunks: {}
    }
  ),

  // resolve: Object.assign({}, createReactAppConfig.resolve, {
  //   plugins: []
  // }),
  //
  // module: Object.assign({}, createReactAppConfig.module, {
  //   rules: [
  //     createReactAppConfig.module.rules[0],
  //     createReactAppConfig.module.rules[1],
  //     {
  //       oneOf: createReactAppConfig.module.rulesoneOf[0]
  //     }
  //   ]
  // })
});
