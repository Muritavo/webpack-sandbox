const path = require("path");

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    family: ["./src/familyReunionWithDependency.js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
    runtimeChunk: false,
  },
  output: {
    path: path.resolve(__dirname, "dist_entry_dep"),
    filename: "[name].bundle.js",
  }
};
module.exports = config;
