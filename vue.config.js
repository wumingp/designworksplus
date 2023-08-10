const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins:[
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      })
    ],
    // rules:[
    //     {
    //         test: /\.less$/,
    //         loader: "style-loader!css-loader!less-loader",
    //     },
    // ]
  },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:80',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
})
