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
    <div class="middleContent" v-show="isLyricShow">
      <img src="@/assets/needle-ab.png" class="img_needle" :class="{img_needle_active:!isBtnShow}">
      <img src="@/assets/blackcircle.png" class="img_blackcircle">
      <img :src="musiclist.al.picUrl" class="img_al" :class="{img_al_active:!isBtnShow,img_al_paused:isBtnShow}">
    </div>
    <div class="musicLyric">
      <p v-for="(item,i) in lyric" :key="i" :class="{acitve:(currentTime*1000 >= item.time && currentTime*1000 < item.pre)}">
        {{item.lrc}}
      </p>
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
  import { mapMutations, mapState } from 'vuex';
  export default {
    data(){
      return{
        isLyricShow: false
      }
    },
    props:['musiclist','playmusic','isBtnShow'],
    components:{
      Vue3Marquee
    },
    computed:{
      ...mapState(['lyricList','currentTime']),
      lyric(){
        let arr
        if(this.lyricList.lyric){
          arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/)
          .map((item,i) => {
            let min = item.slice(1,3)
            let sec = item.slice(4,6)
            let mill = item.slice(7,10)
            let lrc = item.slice(11,item.length)
            let time = parseInt(min)*60*1000 + parseInt(sec)*1000 + parseInt(mill)
            if(isNaN(Number(mill))){
              mill = item.slice(7,9)
              lrc = item.slice(10,item.length)
              time = parseInt(min)*60*1000 + parseInt(sec)*1000 + parseInt(mill)
            }
            // console.log(min,sec,mill,lrc);
            return {min,sec,mill,lrc,time}
          })
          // console.log(arr);
          arr.forEach((item,i) => {
            if (i === arr.length-1) {
              item.pre = 0
            }else{
              item.pre = arr[i + 1].time
            }
          });
        }
        console.log(arr);
        return arr
      }
    },
    methods:{
      ...mapMutations(['updateDetailShow'])
    },
    mounted(){
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
      background-color: aqua;
      .img_needle{
        height: 3rem;
        position: absolute;
        top: .2rem;
        left: 45%;
        z-index: 1;
        transform-origin:.34rem .26rem;
        transform: rotate(-20deg);
        transition: all 1.5s;
      }
      .img_needle_active{
        height: 3rem;
        position: absolute;
        top: .2rem;
        left: 45%;
        z-index: 1;
        transform-origin:.34rem .26rem;
        transform: rotate(0deg);
        transition: all 1.5s;
      }
      .img_blackcircle{
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 2rem;
        left: .9rem;
        z-index: 0;
      }
      .img_al{
        width: 4rem;
        height: 4rem;
        position: absolute;
        border-radius: 50%;
        top: 2.5rem;
        left: 1.39rem;
        z-index: -1;
        animation: rotate_ar 10s linear infinite;
      }
      .img_al_active{
        animation-play-state: running;
      }
      .img_al_paused{
        animation-play-state: paused;
      }
      @keyframes rotate_ar{
        0%{
          transform: rotateZ(0deg);
        }
        100%{
          transform: rotateZ(360deg);
        }
      }
    }
    .musicLyric{
      width: 100%;
      height: 9rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: .4rem;
      margin-bottom: 3.2rem;
      overflow: scroll;
      p{
        color: rgb(185, 185, 185);
        margin-bottom: .1rem;
        font-size: .35rem;
        font-weight: 500;
      }
      .acitve{
        color: white;
        font-size: .4rem;
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