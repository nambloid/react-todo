const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'bower_components')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-0']
                }
            }
        ]
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app/components'),
            path.resolve(__dirname, 'app/api')
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            applicationStyles: path.resolve('app/styles/app.scss'),
            actions: path.resolve('app/actions/actions.jsx'),
            reducers: path.resolve('app/reducers/reducers.jsx'),
            configureStore: path.resolve('app/store/configureStore.jsx')
        }
    },

    devtool: 'cheap-module-eval-source-map',

    context: __dirname,

    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],

    externals: {
        jquery: 'jQuery'
    }
};
