/*
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 14:37:39
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 14:43:29
 */

import https from '@utils/request'
export default {
  // 活动平台授权
  activityAuthentication(data) {
    return https({
      url: '/platform/authentication',
      method: 'post',
      data
    })
  },
}