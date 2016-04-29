/**
 * Created by zhangyingjie on 2016/2/29.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/entry/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            { test: /\.css$/,
              loader: 'style-loader!css-loader!sass-loader'},
            { test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'}
        ]
    },

    resolve: {
        extensions: ['','.js', '.json', '.scss','.jsx']
    }
}