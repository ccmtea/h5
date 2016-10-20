var autoprefixer = require('autoprefixer');
module.exports = {
    entry: "./demo/index.js",
    output: {
        path: 'static/',
        publicPath: '/static/',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!postcss!sass" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel' },
            { test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/, loader: 'file-loader?name=[hash].[ext]' }
        ]
    },
    postcss: [ autoprefixer({ browsers: ["android 4", "iOS 6"] }) ],
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    vue: {
        loaders: {
            scss: 'style!css!postcss!sass'
        },
    }
};