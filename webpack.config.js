const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  module: {
    rules: [{
        test: /\.text$/,
        use: ['raw-loader']
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' // less-loader 依赖于 less
        ]
      },
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },{
      test:/\.vue$/,
      use:['vue-loader']
    }
    ]
  },

}
