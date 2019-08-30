/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 17:25:29
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:31:12
 */
import getters from './getters'

export default new Vuex.Store({
  state: { 
    isIos: true, //是否是苹果手机
  },
  getters,
  mutations:{
    SET_ISIOS(state, data){
      state.isIos = data
    }
  },
  actions:{
    // 获取用户信息
    // getUser({commit}) {
    //   return new Promise((resolve,reject) => {
    //     user.personalInfo().then(res => {
    //       !save.local('webSocketKey') && save.local('webSocketKey', res.info.webSocketKey)
    //       commit('SET_USER', res.info)
    //       resolve(res)
    //     })
    //   })
    // }
  }
})
