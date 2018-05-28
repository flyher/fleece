const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, '.tmp');
const CopyWebpackPlugin = require('copy-webpack-plugin')
/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
  // context: ROOT,
  // devServer: {
  //   contentBase: path.join(__dirname, ".tmp"),
  //   compress: true,
  //   port: 9000
  // },
  // entry: './index.ts',
  // output: {
  //   path: DESTINATION,
  //   filename: 'index.js'
  // },
  entry: {
    'scripts/app': [
      './src/entry/app.tsx',
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: (process.env.NODE_ENV.trim() === 'release' || process.env.NODE_ENV.trim() === 'pre') ? '/dist/' : 'http://localhost:8889/dist/',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader',
        enforce: 'pre'
      },
      { test: /.tsx?$/, use: ['awesome-typescript-loader'] },
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/
      // },

      // {
      //   test: /\.ts$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     'ng-annotate-loader',
      //     'awesome-typescript-loader',
      //     'angularjs-template-loader'
      //   ]
      // },
      // https://www.npmjs.com/package/angularjs-template-loader
      // {
      //   test: /\.ts$/,
      //   use: [
      //     {
      //       loader: 'awesome-typescript-loader'
      //     },
      //     {
      //       loader: 'angularjs-template-loader',
      //       // options: {
      //       //   relativeTo: path.resolve(__dirname, 'app/src')
      //       // }
      //     }
      //   ],
      //   exclude: [/\.(spec|e2e)\.ts$/]
      // },
      {
        test: /\.(html|tpl)$/,
        use: ['raw-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader'
      },
      // {
      //   test: /\.html$/,
      //   use: ['raw-loader'],
      //   exclude: /src\/app.html/,
      // },
      // {
      //   test: /.html$/,
      //   exclude: /src\/app.html$/,
      //   use: 'html-loader'
      // }
      // {
      //   test: /\.html$/,
      //   exclude: /src\/app.html$/,
      //   use: ['raw-loader']
      // }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'src/app.html'
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'AngularJS - Webpack',
    //   template: 'src/app.html',
    //   inject: true
    // }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          configuration: require('./tslint.json'),
          typeCheck: true
        }
      }
    }),
    // 拷贝文件
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname) + '/src/*.html',
      to: path.resolve(__dirname) + '/dist',
      toType: 'dir', // 可选，默认是文件 file 或者 dir
      force: true, // 强制覆盖先前的插件
      flatten: true,
      ignore: ['.*']
    }])
  ],
  // devtool: 'cheap-module-source-map'
  devtool: process.env.NODE_ENV.trim() === 'release' ? false : '#eval-source-map'
};