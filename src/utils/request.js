/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 14:09:52
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 14:11:44
 */
// import Vue from 'vue'
import axios from 'axios'

// 创建axios实例

const service = axios.create({
  baseURL: process.env.BASE_API, // 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin',//, // api的base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if(!config.data){
    config.data = {}
  }
  if(!config.params){
    config.params = {}
  }
  //线上授权
  let token = window.sessionStorage.getItem('token')
  config.data.token = token
  config.params.token = token
  config.data = config.data
  return config
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      if(!response.data){
        // Vue.$vux.toast.text(response.data.message, 'top')
        // reject('error')
        // router.push( { path : '/errorNet' } )
      }else{
        const res = response.data
        // console.log(res.code,'回调')
        resolve(res)
      }
    })
  },
  error => {
    // Vue.$vux.toast.text(error, 'top')
    // Vue.$router.push({path:'/errorNet' })
    // console.log(error,'error')
  }
)

export default service
