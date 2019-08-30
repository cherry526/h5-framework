<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 17:14:41
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:19:18
 -->
<template>
  <div class="fixed_footers" :class="{noIos: !isIos}" v-footers>
    <slot></slot>
  </div>
</template>
<script>
  //固定底部的footer
  import { mapGetters } from 'vuex'
  export default {
    name: 'fiexdBtn',
    components:{},
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(["isIos"])
    },
    methods: {
    },
    created() {
    }
  }
</script>
<style scoped lang='scss'>
  .fixed_footers{
    width: 100%;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    bottom: 0;
    // &.noIos{
    //   bottom: 1.33rem;
    // }
  }
</style>