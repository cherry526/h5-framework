<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 10:46:35
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:42:49
 -->
<template>
  <div>
    <div class="flex_c home">首页</div>
    <fiexd-btn>
      <span>返回渠道选择</span>
    </fiexd-btn>
  </div>
</template>
<script>
  import Api from '@api/index.js'
  export default {
    name: 'home',
    components:{},
    data() {
      return {
      }
    },
    methods: {
    },
    created() {
      // console.log(this, Vue.prototype, 'oooo')
      console.log(Api,'api')
      Api.init.activityAuthentication({ appKey: 'platform', appToken: "0953d14c128564886fc4cf1bcf2599ff", userName: 'xiaojuan' }).then((res)=>{
        console.log(res,'res')
      })
    }
  }
</script>
<style scoped lang='scss'>
.home {
  width: 370px;
  height: 40px; /* no*/
  background-color: $org;
}
</style>

