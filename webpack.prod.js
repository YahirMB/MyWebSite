const HtmlWebpackPlugin = require("html-webpack-plugin") //sirve para inyectar html 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")


module.exports = {
    mode:'production',

    output:{
        clean:true,
        filename:'main.[contenthash].js'
    },

    module : {
        rules : [
            {
                test:/\.html$/,
                loader:'html-loader', //para cargar html a dist
                options:{
                    sources:false
                }
            },
            {
                test:/\.css$/,
                exclude:/styles.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/styles.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
        ]
    },

    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css'
        }),
        new CopyPlugin({
            patterns:[
                {from:'src/resources/', to:'resources/'},
            ]
        })
    ]
}