/**
 * webpack的entry提供这几个入口文件的加载方式.动态打包方式还提供了promise对象的加载方式.不过是es6的内容了。这里不深究
 * 部分例子中使用了context用于设置入口文件的目录的.设置的话，enter配置里面的路径就是基于content路径的。
 * 如果要配置。一般为context:__dirname + '/src' 或使用path context:path.resolve(__dirname,'/src)
 * 不设置默认webpack.config.js根路径.
 * 还有使用path模块做路径的处理的，那是node里面内置的path模块。不属于webpack的内容.
 */
const webpack = require('webpack');
let entry = () => './src/four.js';
module.exports = {
    entry:{
        first:'./src/first.js',//单个文件打包
        second:['./src/second.js','./src/third.js'],//多个文件打包
        four:entry()//动态入口打包,可以使用一个函数,函数返回值为打包的入口文件
    },
    output:{
        path:__dirname + '/dist',
        filename:'[name].main.js'
    }
};
