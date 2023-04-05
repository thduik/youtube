const path = require("path");
const HWP = require("html-webpack-plugin");
const webpack = require('webpack')


module.exports = {
  entry: path.join(__dirname, "/src/index.jsx"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HWP({ hash: true, filename: 'index.html' }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
