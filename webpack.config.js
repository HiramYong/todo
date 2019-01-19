const webpack = require('webpack');
const path = require('path');
const htmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: { 
    extensions: ['.js', '.json'], 
    alias: { 
      src: path.resolve(__dirname, 'src'), 
    } 
  }, 
  plugins: [
    new htmlWepackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    require('autoprefixer'),
  ],
  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  }
};
