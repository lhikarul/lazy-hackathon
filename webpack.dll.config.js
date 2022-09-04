const webpack = require("webpack");
const path = require("path");

const dllPath = "./dll";

module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery", "slick-carousel", "popper.js"],
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, "[name]-manifest.json"),
      name: "[name]_[hash]",
      context: process.cwd(),
    }),
  ],
};
