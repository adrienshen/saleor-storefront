const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HotModulePlugin = require("webpack").HotModuleReplacementPlugin;

module.exports = ({ sourceDir, distDir }) => ({
  devServer: {
    watchOptions: {
      poll: 10000
    }
  },
  output: {
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: false }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new HotModulePlugin()
  ]
});
