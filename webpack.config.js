const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',// 指定开发者打包模式
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path :  __dirname+'/public'//输出文件路径
    },
    module : {
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}