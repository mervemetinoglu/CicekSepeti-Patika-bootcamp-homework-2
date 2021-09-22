const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/js/index.js"),
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5001, //default 8080
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bootcamp Homework 2",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};
