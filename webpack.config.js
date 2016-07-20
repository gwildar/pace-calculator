var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');
    StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin'),
    locals = {
      routes: [
      '/',
      ]
    };

module.exports = {
  entry: [
      'webpack/hot/only-dev-server',
      './src/index'
    ],
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
      test: /\.js?$/, 
      loaders: ['react-hot', 'babel'], 
      include: __dirname + '/src',
      exclude: /node_modules/ 
    },
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader'
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
    },
    { 
      test: /\.(woff|woff2)$/,  
      loader: "url-loader?limit=10000&mimetype=application/font-woff" 
    },
    { test: /\.ttf$/,    
      loader: "file-loader" 
    },
    { test: /\.eot$/,    
      loader: "file-loader" 
    },
    { test: /\.svg$/,    
      loader: "file-loader" 
    }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.NoErrorsPlugin(),
    new StaticSiteGeneratorPlugin('main', locals.routes)
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.less']
  },
};
