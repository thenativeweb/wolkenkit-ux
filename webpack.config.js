const path = require('path');

const processenv = require('processenv'),
      webpack = require('webpack');

const isProductionMode = processenv('NODE_ENV') === 'production';

const configuration = {
  devtool: 'eval',
  context: path.join(__dirname, 'test'),
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    compress: true,
    port: 8080
  },
  target: 'web',
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: 'wk-[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
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

if (isProductionMode) {
  configuration.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ];

  configuration.devtool = undefined;
}

module.exports = configuration;
