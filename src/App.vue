<template>
  <router-view/>
  <FooterMusic v-show="isFooterMusic"></FooterMusic>
</template>

<script>
  import FooterMusic from '@/components/item/FooterMusic'
import { mapState } from 'vuex'
  export default{
    components:[
      FooterMusic
    ],
    computed:{
      ...mapState(['isFooterMusic'])
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
