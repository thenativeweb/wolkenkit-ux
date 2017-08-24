const path = require('path');

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, 'test'),
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    compress: true,
    port: 8080
  },
  entry: [
    './index.jsx',
    './index.html'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' }}
        ]
      }
    ]
  }
};
