const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    port: 3111,
    hot: isDev
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html" ,
      // minify: {
      //   collapseWhitespace: true,
      // },
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'build')}
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};