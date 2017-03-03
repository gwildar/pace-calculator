var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require ('html-webpack-plugin'),
    FaviconsWebpackPlugin = require ('favicons-webpack-plugin');

module.exports = {
  entry: [
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
  devtool: 'source-map',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel'],
        include: __dirname + '/src',
        exclude: /node_modules/
      },
      {
      test: /\.json$/,
      loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        include: __dirname + '/src',
        loaders: ['babel-loader']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "file-loader"
      },
      {
        test: /\.eot$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: 'Pace Calculator',
      template: './src/index.ejs',
    }),
    new Webpack.NoErrorsPlugin(),
    new FaviconsWebpackPlugin({
    logo: './src/favicon.png',
    inject: true,
    background: '#fff',
    title: 'Pace Calculator',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: true
    }
  })

  ],
    eslint: {
    failOnWarning: false,
    failOnError: true
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ejs', '.js', 'jsx', '.less']
  },
};
