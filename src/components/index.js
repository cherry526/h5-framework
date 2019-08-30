/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 17:12:05
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:15:04
 */
import footBtn from './footBtn/footBtn'
import fiexdBtn from './footBtn/fiexdBtn.vue'
import Vue from 'vue'

const components = [
  footBtn,
  fiexdBtn
]
const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default { install }