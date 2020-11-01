const path = require("path");

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    family: ["./src/familyReunion.js"],
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  }
};
module.exports = config;
