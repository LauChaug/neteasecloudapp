<template>
  <div>
    <div class="container">
      <div class="top">
        <div class="topleft">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <div>
            <span>播放全部</span>
            <span class="span2">(共{{songsList.length}}首)</span>
          </div>
        </div>
        <div class="topright">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang2"></use>
          </svg>
          <span>收藏 ({{subscribedCount}})</span>
        </div>
      </div>
      <div class="itemlist">
        <div class="item" v-for="(item,i) in songsList" :key="i">
          <div class="itemleft" @click="playmusic(i)">
            <span class="leftspan">{{1+i}}</span>
            <div>
              <p>{{item.name}}</p>
              <span v-for="(item2,i) in item.ar" :key="i">
                {{item2.name}}
              </span>
            </div>
          </div>
          <div class="itemright">
            <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
              <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
              <use xlink:href="#icon-liebiao"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
  export default {
    setup(props){
      console.log(props);
    },
    props:['songsList','subscribedCount'],
    methods:{
      ...mapMutations(['updatePlayList','updateplaylistindex']),
      playmusic(i){
        this.updatePlayList(this.songsList)
        this.updateplaylistindex(i)
      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    right: 10rem;
    background-color: #fff;
    padding: 0 .2rem;
    margin-top: .2rem;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    .top{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .1rem;
      padding: .12rem;
      .topleft{
        width: 39%;
        height: 100%;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{

        }
        .span2{
          font-size: .2rem;
          color: rgb(134, 134, 134);
        }
      }
      .topright{
        width: 35%;
        height: 100%;
        font-size: .26rem;
        color: white;
        background-color: rgb(255, 0, 0);
        border-radius: .4rem;
        position: relative;
        .icon{
          width: .6rem;
          height: .6rem;
          fill: white;
          position: absolute;
          top: 2.5px;
          left: .075rem;
        }
        span{
          height: 100%;
          line-height: .76rem;
          position: absolute;
          left: .65rem;
        }
      }
    }
    .itemlist{
      width: 100%;

      .item{
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemleft{
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          .leftspan{
            display: inline-block;
            width: .2rem;
          }
          div {
            p {
              width: 4.54rem;
              height: .4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 700;
            }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
            }
            margin-left: 0.3rem;
          }
        }
        .itemright{
          width: 20%;
          height: 100%;
          display: flex;
          // justify-content: space-between;
          align-items: center;
          position: relative;
          .icon{
            fill: rgb(112, 112, 112);
          }
          .bofang{
              position: absolute;
              left: 0;
            }
          .liebiao{
              position: absolute;
              right: 0;
            }
        }
      }
    }
  }
</style>