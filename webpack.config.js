var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require ('html-webpack-plugin');

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
        test: /\.js?$/,
        loaders: ['jshint'],
        include: __dirname + '/src',
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
    new Webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.less']
  },
};
