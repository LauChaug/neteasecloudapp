<template>
  <div>
    <div id="swipTop">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
          <img :src="image.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import { getBanner } from "@/request/api/home.js";
  import { onMounted,reactive } from "vue";
  export default {
    setup(){
      const state = reactive({
        images:[]
      })
      onMounted(async ()=>{
        // axios.get('')
        // .then((res) => {
        //   console.log(res);
        //   state.images = res.data.banners
        //   console.log(state.images);
        // })
        let res = await getBanner()
        state.images = res.data.banners
      })
      return { state }
    }
  }
</script>

<style lang="less">
#swipTop{
  position: relative;
  .van-swipe{
    left: .16rem;
    width: 96%;
    // padding: 0 0.2rem;
    .van-swipe__track{
      .van-swipe-item{
        img{
          width: 96%;
          height: 3rem;
          border-radius: .2rem;
        }
      }
    }
    .van-swipe__indicator--active{
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>