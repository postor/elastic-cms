var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [{
      test: /backend[\/|\\]frontended[\/|\\].*\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: '@frontended/axios-loader',
        options: {
          apiPrefix: '/api',
          backendFolder: 'backend/frontended'
        }
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-transform-runtime"
          ]
        }
      }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },{
      test: /\.(png|jpe?g|gif|ttf|woff2?|eot|svg)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}