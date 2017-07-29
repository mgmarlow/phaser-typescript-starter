const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      { test: /assets(\/|\\)/, loader: 'file-loader?name=assets/[hash].[ext]' },
      { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js$/, loader: 'expose-loader?p2' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      pixi: path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      phaser: path.join(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
      p2: path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
      // assets: path.join(__dirname, 'assets/')
    }
  },
  // plugins: [
  //   new cleanWebpackPlugin([
  //     path.join(__dirname, 'build')
  //   ])
  // ],
  output: {
    filename: 'build/bundle.js',
    path: __dirname
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    inline: true,
    watchOptions: {
      // aggregateTimeout: 300,
      // poll: true,
      ignored: /node_modules/
    }
  }
};