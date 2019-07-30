var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
    //publicPath: ''
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['react-hot-loader/babel']
        }
      }]
    }, {
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // create style nodes from JS strings
      }, {
        loader: 'css-loader'   // translates CSS into CommonJS
      }, {
        loader: 'sass-loader'  // compiles Sass to CSS, using Node Sass by default
      }]
    }, {
      test: /\.(png|jpg|gif|svg)$/i,
      use:[{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index_template.html'
    })
  ]
}
