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
    ]
  },
    devServer:{
        proxy:{
            '/api':{
                target:'http://127.0.0.1:8888',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }

    }
})
