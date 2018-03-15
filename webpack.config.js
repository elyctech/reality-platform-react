const path  = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    name: "client",
    output: {
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  },
  {
    name: "server",
    entry: "./src/renderServerSide.js",
    target: "node",
    output: {
      path: path.resolve("./"),
      filename: "renderServerSide.js",
      libraryExport: "default",
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  }
];