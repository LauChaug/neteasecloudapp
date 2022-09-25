<template>
  <div>
    个人中心页面
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['user']) //获取vuex中保存的用户详情信息
    }
  }
</script>

<style scoped lang="less">
  
</style>