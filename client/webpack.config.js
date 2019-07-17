const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    // contentBase: './dist',
    historyApiFallback: true
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"  }),
    new Dotenv()
  ]
};
