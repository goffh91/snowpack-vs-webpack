const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      index: "./src/index.tsx"
    },
    output: {
      filename: "dist/[name].js",
      path: path.resolve(
        process.cwd(),
        "build",
      ),
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "public", "index.html")
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
      ]
    },
    devServer: {
      port: 8000,
      compress: true,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
  }
};