module.exports = {
    entry: __dirname + '/src/pagehdr.js',
    output: {
        path: __dirname + '/dist',
        filename: 'pagehdr.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
