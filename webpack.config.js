var ExtractTextPlugin = require('extract-text-webpack-plugin'),
StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
locals = {
  routes: [
  '/',
  ]
};

module.exports = {
  entry: './src/index',
  devtool: 'source-map',
  output: {
    path: './build',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      include: __dirname + '/src',
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
    },
    { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf$/,    loader: "file-loader" },
    { test: /\.eot$/,    loader: "file-loader" },
    { test: /\.svg$/,    loader: "file-loader" }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', locals.routes),
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.less']
  },
};
