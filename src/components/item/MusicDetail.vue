<template>
  <img :src="musiclist.al.picUrl" class="bgimg">
  <div class="container">
    <div class="topCount">
      <div class="top-left">
        <svg class="icon zuojiantou" aria-hidden="true" @click="updateDetailShow">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="authorInfo">
          <Vue3Marquee 
          style="color: white;"
          :duration='5' 
          :pauseOnHover='true'
          :pauseOnClick='true'>
            {{musiclist.name}}
          </Vue3Marquee>
          <span v-for="(item,i) in musiclist.ar" :key="i">{{item.name}}</span>
          <svg class="icon xiangyoujiantou" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
      </div>
      <div class="top-right">
        <svg class="icon fenxiang" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="middleContent">
      <img src="@/assets/needle-ab.png" class="img-needle">
      <img src="@/assets/blackcircle.png" class="img-blackcircle">
      <img :src="musiclist.al.picUrl" class="img-al">
    </div>
    <div class="bottomContent">
      <div class="topIcons">
        <svg class="icon kongaixin" aria-hidden="true">
          <use xlink:href="#icon-kongaixin"></use>
        </svg>
        <svg class="icon download" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
        <svg class="icon heijiaochangpian" aria-hidden="true">
          <use xlink:href="#icon-heijiaochangpian"></use>
        </svg>
        <svg class="icon zaixianliuyan" aria-hidden="true">
          <use xlink:href="#icon-zaixianliuyan"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-liebiao-"></use>
        </svg>
      </div>

      <div class="middleLin"></div>

      <div class="bottomIcons">
        <svg class="icon fanhui2x" aria-hidden="true">
          <use xlink:href="#icon-fanhui2x"></use>
        </svg>
        <svg class="icon shangyiqu" aria-hidden="true">
          <use xlink:href="#icon-shangyiqu"></use>
        </svg>
        <svg class="icon bofang2" aria-hidden="true" @click="playmusic" v-if="isBtnShow">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <svg class="icon bofang2" aria-hidden="true" @click="playmusic" v-else>
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="icon xiayiqu" aria-hidden="true">
          <use xlink:href="#icon-xiayiqu"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import { Vue3Marquee } from 'vue3-marquee'
  import 'vue3-marquee/dist/style.css'
  import { mapMutations } from 'vuex';
  export default {
    props:['musiclist','playmusic','isBtnShow'],
    components:{
      Vue3Marquee
    },
    methods:{
      ...mapMutations(['updateDetailShow'])
    },
    mounted(){
      console.log(this.musiclist);
    }
  }
</script>

<style scoped lang="less">
  .bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(0.7rem);
  }
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: .3rem;
    fill: white;
    position: relative;
    .topCount{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .top-left{
        display: flex;
        // justify-content: space-between;
        align-items: center;
        .authorInfo{
          width: 2rem;
          height: 100%;
          margin-left: 0.4rem;
          color: rgb(175, 175, 175);
          .icon{
            width: 0.3rem;
            height: 0.3rem;
            fill: #999;
            margin-left: .01rem;
          }
          span{
            color: #999;
          }
        }
      }
      .top-right{
        fill: white;
      }
    }
    .middleContent{
      width: 100%;
      height: 9rem;
      position: relative;
      .img-needle{
        height: 3.5rem;
        position: absolute;
        top: 10px;
        left: 45%;
        z-index: 1;
      }
      .img-blackcircle{
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 100px;
        left: .9rem;
        z-index: 0;
      }
      .img-al{
        width: 4rem;
        height: 4rem;
        position: absolute;
        border-radius: 50%;
        top: 125px;
        left: 1.39rem;
        z-index: -1;
      }
    }
    .bottomContent{
      width: 92%;
      height: 3rem;
      position: absolute;
      bottom: 0.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .topIcons{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
          width: .63rem;
          height: .63rem;
          fill: rgb(245, 234, 234);
        }
        .icon:nth-child(3){
          width: .82rem;
          height: .82rem;
        }
      }
      .middleLin{}
      .bottomIcons{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon{
          width: 0.75rem;
          height: 0.75rem;
          fill: rgb(218, 208, 208);
        }
        .icon:nth-child(3){
          width: 1.5rem;
          height: 1.5rem;
        }
        .icon:nth-child(1){
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
  }
</style>