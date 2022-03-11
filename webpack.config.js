const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filtename: 'bulid.js',
    path: resolve(__dirname, 'bulid'),
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,,
           'css-loader',
          压缩
           {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss的插件
                require('postcss-preset-env')()
              ]
            }
          }
          ],
      },
      // js规范
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true
        }
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          outputPath: 'images/',
          name: '[name].[ext]',
        },
      },
      // 处理html
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
        // 压缩html代码
        minify: {
          // 移除空格
          collapseWhitespace: true,
          // 移除注释
          removeComments: true
        }
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development',
};
