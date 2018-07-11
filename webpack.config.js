const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path')
const webpack = require('webpack')

function join(...args) { // ...args 出现在参数中叫做 rest 参数，它是把所有剩余参数放入一个数组
  return path.join(__dirname, ...args) // 出现在非函数参数的位置，...args 表示展示操作符，表示将数组展开，元素一个一个的摆放到这里
}

module.exports = {
  mode: "development",//可提高编译速度
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  entry: join("./src/main.js"),
  output: {
    path: join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new VueLoaderPlugin(),//https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: join('./index.html'),
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
          presets: ['env']//注意版本问题 https://www.npmjs.com/package/babel-loader
        }
      }
    },{
      test:/\.vue$/,
      use:['vue-loader']// 依赖于 vue-template-compiler,需要额外安装
    }
    ]
  },

}
