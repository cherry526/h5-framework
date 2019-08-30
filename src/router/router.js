/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 16:17:47
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 16:22:23
 */
import Vue from "vue";
import Router from "vue-router";

let _import = null
if (process.env.NODE_ENV === 'development') {
  _import = file => require('@/views/' + file + '.vue').default
} else {
  _import = file => () => import('@/views/' + file + '.vue')
}

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: _import('home')
    }
  ]
});