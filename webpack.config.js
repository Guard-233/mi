const Webpack = require('webpack')

const path = require('path') //调用路径
const HtmlWebpackPlugin = require('html-webpack-plugin')  //引入打包html的插件

// css分离
const MiniCssExtractPlgin = require("mini-css-extract-plugin")

const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
  mode: 'development',  //开发模式
  entry: './src/js/index.js',
  output: {
    filename: '[name].js',  //输出文件名
    path:path.resolve(__dirname,'./dist') //指定生成的文件目录
  },
  devServer:{
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 2048,
              name: '[name]_[hash:8].[ext]',
              outputPath: 'image'
            }
          }
        ]
      },
      {
        test:/\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlgin.loader,
            options: {
              publicPath: '../'
            }
          },
          // 不需要 style-loader，会报错
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // html 
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/index.html'), //文件模板
      filename:'index.html',  //输出文件名
    }),
    // css 分离
    new MiniCssExtractPlgin({
      filename: "css/index.css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/img',
          to: './img'
        }
      ]
    }),
    // 热更
    new Webpack.HotModuleReplacementPlugin(),
  ]
}
