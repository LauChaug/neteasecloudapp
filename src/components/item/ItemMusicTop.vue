<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg">
    <div class="itemleft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemright">
      <router-link to="/search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </router-link>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    setup(props){
      // console.log(props);
      // 通过props传值，判断如果数据拿不到，就获取session storage中的值
      if(props.playlist.creator=''){
        props.playlist.creator = JSON.parse(localStorage.getItem().playlist).creator
      }
    },
    props:['playlist']
  }
</script>

<style scoped lang="less">
  .itemMusicTop{
    position: relative;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: .2rem;
    .itemleft,.itemright{
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 .2rem;
      span{
        font-size: .4rem;
        color: white;
      }
      .icon{
        fill: white;  //填充
      }
    }
    .bgimg{
      width: 100%;
      height: 11rem;
      position: fixed;
      z-index: -1;
      filter: blur(.5rem);
    }
  }
</style>