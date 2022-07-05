const path = require("path");

module.exports = {

 devtool: "eval-source-map",
 entry: "./src/index.js",
 resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname,'node_modules')],
 },
 output: {
  path: "/public",
  filename: "bundle.js",
  },
 devServer: {
   static: {
    directory: path.join(__dirname, "public"),
   },
  compress: true,
  port: 8080,
  historyApiFallback: true,
  },
  module: {
   rules: [
   {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.m?js$/i,
    resolve: {
    fullySpecified: false,
   },
  },
 ],
 },
};
