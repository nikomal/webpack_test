const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry:{
        first:'./first.js',
        second:'./second.js',
        third:'./third.js',
        four:'./four.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:'[id].[name].[hash].main.js'
    }
};