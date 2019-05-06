const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const transformInferno = require('ts-transform-inferno').default;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(process.cwd(), "dist"),
    libraryTarget: "umd",
    filename: "[name].js"
  },
  externals: ["inferno"],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [transformInferno()],
        }),
      },
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
    }]
  },
  plugins: [
    new CleanWebpackPlugin({})
  ],
};