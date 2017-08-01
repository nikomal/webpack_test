const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin');
module.exports = {
    context:__dirname + '/src',
    entry:{
        app:'./entry.js',
        hello:'./hello.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:"[name].index.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },{
            test:/\.css$/,
            exclude:/node_modules/,
            use:['style-loader','css-loader']
        },{
            test:/\.png$/,
            exclude:/node_modules/,
            use:'file-loader'
        }]
    },
    plugins:[
        new htmlWebpack({
            title:"Output Management"
        }),
        new cleanWebpack(['dist'])
    ],
    devtool:'inline-source-map',
    devServer: {
        contentBase:'./dist'
    }
};