const path = require("path");
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
const htmlwebpackplugin = require("html-webpack-plugin");
const minicssextractplugin = require("mini-css-extract-plugin");

module.exports = {
  entry: src + "/js/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /nodemodules/,
        use: ["ts-loader", "babel-loader"],
        include: [src],
      },
      {
        test: /\.css$/,
        use: [minicssextractplugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    filename: "./js/bundle.js",
    path: dist,
  },
  devServer: {
    static: dist,
    port: 3000,
    hot: true,
    open: false,
  },
  plugins: [
    new htmlwebpackplugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
    new minicssextractplugin({filename: './css/styles.css'}),
  ],
  mode: "development",
};
