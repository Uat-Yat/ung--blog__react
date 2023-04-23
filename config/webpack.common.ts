import path from 'path';
import webpack from 'webpack';
import type webpack_dev_server from 'webpack-dev-server';

/** Plugins */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import RefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

interface Config extends webpack.Configuration {
  devServer?: webpack_dev_server.Configuration;
}

const common: Config = {
  entry: {
    index: `${path.resolve(__dirname, '../src')}/index.tsx`,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new RefreshWebpackPlugin(),
    new webpack.ProvidePlugin({ React: 'react' }),
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, '../public')}/index.html`,
    }),
  ],

  optimization: {},

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
  },
};

export default common;
