const path = require("path");

module.exports = {
  entry: {
    recruit: './src/scripts/recruit.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
