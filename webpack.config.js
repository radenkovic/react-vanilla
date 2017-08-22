const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'

console.log("Running in: " + project.env)

const config = {
  entry: {
    normalize: [
      inProjectSrc('normalize'),
    ],
    main: [
      inProjectSrc(project.main),
    ],
  },
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath,
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        query: {compact: false}
      }
    ],
  },
  // Globals & Plugins
  plugins: [
    new webpack.DefinePlugin(Object.assign({
      'process.env': { NODE_ENV: JSON.stringify(project.env) },
      __DEV__,
      __TEST__,
      __PROD__,
    }, project.globals))
  ],
}

// DevServer
// ------------------------------------
config.devServer = {
  contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'public')],
  port: 3000,
  compress: false, // enable gzip compression
  historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  https: false,
  hot: true,
  noInfo: true, // only errors & warns on hot reload -- faster builds
}

// Enable HMR
// ------------------------------------
if (__DEV__) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NamedModulesPlugin())
}

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {  collapseWhitespace: false },
}))

// Images
// ------------------------------------
config.module.rules.push({
  test    : /\.(png|jpg|gif)$/,
  loader  : 'url-loader',
  options : {
    limit : 8192,
  },
})


// Bundle Splitting
// ------------------------------------
if (!__TEST__) {
  const bundles = ['normalize', 'manifest']

  if (project.vendors && project.vendors.length) {
    bundles.unshift('vendor')
    config.entry.vendor = project.vendors
  }
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: bundles }))
}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !!config.devtool,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    })
  )
}

module.exports =  config
