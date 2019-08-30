/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 13:53:30
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:36:24
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
let api = process.env.VUE_APP_BASE_API
module.exports = {
  // 基本路径
  publicPath: './',
  // vux 相关配置,使用vux-ui
  configureWebpack: config => {
  
  },
  lintOnSave: false, // 关闭eslint
  outputDir:"dist",
  assetsDir:"assets",
  indexPath:"index.html",
  runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本 
  productionSourceMap: false,
  devServer: {
    // disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     // target: 'http://36d.kdwaimai.com/zt_activity_platform',
    //     // target: 'http://36d.kdwaimai.com/ligh_activity_platform',
    //     // target: 'http://36d.kdwaimai.com/jkb_activity_platform',
    //     target: 'http://api.jk8.kdwaimai.com/box-jkb-channel-api',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    //proxy: proxyObj, // string | Object
    before: app => {}
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)
    // 添加别名
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'))
      .set('@styles', resolve('src/styles'))
      .set('@api', resolve('src/api'))
  },
  css: {
    modules: false,
    // extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        data: `
        @import "@styles/reset.scss";
        @import "@styles/common.scss";
        `
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  // 修改webpack的配置
  configureWebpack: {
    externals: {
      'vue':'Vue',
      'vuex': 'Vuex',
      'vue-router':'VueRouter',
      'axios':'axios',
    }
  }
}