/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 10:46:35
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:26:16
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import filters from '@utils/filters'
import utils from '@utils/utils'
import directives from '@utils/directives'
import UIcomponents from '@src/components/index.js'
import 'lib-flexible/flexible.js'

// 配置全局请求
import Api from './api/index'
console.log(Api,'api')
Vue.prototype.$api = Api

Vue.config.productionTip = false;

Vue.prototype.$utils = utils

// 全局components
Vue.use(UIcomponents)

// 全局指令
for (const key in directives) {
  Vue.directive(key, directives[key])
}

// 全局过滤器
for(let key in filters){
  Vue.filter(key, filters[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
