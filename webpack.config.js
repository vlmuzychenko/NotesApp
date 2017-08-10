const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [/node_modules/, /public/],
        loader: "babel-loader",
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?name=public/img/[name].[ext]'],
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}
