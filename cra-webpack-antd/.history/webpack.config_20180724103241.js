var path = require("path");
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/'
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        // historyApiFallback:true,
        port:8088
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                } 
            },
            {
                test:/\.(css|less)$/,
                loader:['style-loader','css-loader','less-loader']
            }
        ]
    }
}