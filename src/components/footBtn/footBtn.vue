<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: cherry
 * @Date: 2019-08-30 17:14:41
 * @LastEditors: cherry
 * @LastEditTime: 2019-08-30 17:22:43
 -->
<template>
  <div class="foot_btn">
    <!-- <div  class="footBtn bottom1"  v-footers> -->
    <div class="footBtn bottom1" v-if="isOriginHei">
      <div class="btns">
        <div class="mt flex_c_b" v-if="!deletBtn_show">
          <button class="btn btnS1 btnC1" @click="cancel">取消</button>
          <button :disabled="disabledConfirm" :class="['btn', 'btnS1', 'btnC2',{disabled: disabledConfirm}]" @click="comfirm">确定</button>
        </div>
        <button v-else class="btn btnS2 btnC1" @click="delet"> 删除 </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footBtn',
  data() {
    return {
      confirmDisabled: this.disabledConfirm,
      isOriginHei: true,
      screenHeight: document.documentElement.clientHeight, // 此处也可能是其他获取方法
      originHeight: document.documentElement.clientHeight,
    }
  },
  computed: {
    
  },
  watch: {
    'disabledConfirm'(val){
      this.confirmDisabled = val  
    },
    'confirmDisabled'(val){
      this.$emit('update:disabledConfirm',val)
    },
    'screenHeight' (val) {
      if(this.originHeight > val) { // 加100为了兼容华为的返回键
        this.isOriginHei = false;
      }else{
        this.isOriginHei = true;
      }
     
    }
  },
  props: {
    disabledConfirm: {
      type: Boolean,
      default: false
    },
    deletBtn_show: {
      type: Boolean,
      default: false
    },
    comfirm: {
      type: Function,
      default: function(){
        // alert('点击了确定')
      }
    },
    delet: {
      type: Function,
      default: function(){
        // alert('点击了删除')
      }
    },
    cancel: {
      type: Function,
      default: function(){
        this.footBtn_show = false
        this.$emit('cancel')
      }
    }
  },
  created() {
  },
  mounted() {
    let self = this;
    window.onresize = function() {
      return (function(){
          self.screenHeight = document.documentElement.clientHeight;
      })()
    }
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.footBtn{
  width: 100%;
  position: absolute;
  .btns{
    border-top: 1px solid #e8e8ec;
    .btn{
      height: 1.25rem;
      line-height: 1.25rem;
      text-align: center;
      font-size: .48rem;
      border-radius: 0;
      img{
        position: relative;
        top: .07rem;
        width: .52rem;
        height: .56rem;
        margin-right: .13rem;
      }
    }
    .btnS1{
      width: 50%;
    }
    .btnS2{
      width: 100%;
    }
    .btnC1{
      color: #4A4A4A;
      background: #fff;
    }
    .btnC2{
      color: #fff;
      background: linear-gradient(to right, #ff8800, #ff6300);
    }
    .disabled{
      opacity: 0.4;
    }
  }
}
.bottom1{
  bottom: 0rem;
}
.bottom2{
  bottom: 1.33rem;
}
</style>
