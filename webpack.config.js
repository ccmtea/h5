module.exports = {
    entry: "./demo/index.js",
    output: {
        path: 'static/',
        publicPath: '/static/',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel' },
            { test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/, loader: 'file-loader?name=[hash].[ext]' }
        ]
    },
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
            scss: 'style!css!sass'
        },
    }
};