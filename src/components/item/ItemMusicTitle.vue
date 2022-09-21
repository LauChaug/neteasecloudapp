<template>
  <div class="titleContent">
    <div class="titleLeft">
      <img :src="playlist.coverImgUrl" class="titleimg">
    </div>
    <div class="titleright">
      <span class="introduce">{{playlist.name}}</span>
      <div class="creatorInfo">
        <img :src="playlist.creator.avatarUrl">
        <span>
          {{playlist.creator.nickname}}
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
      </div>
      <div class="signature">
        <span>{{playlist.creator.signature}}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup(props){
      
    },
    props:['playlist']
  }
</script>

<style scoped lang="less">
  .titleContent{
    width: 100%;
    height: 3rem;
    display: flex;
    padding: .2rem;
    margin-top: 0.6rem;
    .titleLeft{
      width: 40%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: .25rem;
      }
    }
    .titleright{
      width: 60%;
      height: 100%;
      margin-left: .3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .introduce{
        font-size: .35rem;
        font-weight: bold;
        color: white;
      }
      .creatorInfo{
        color: rgb(216, 216, 216);
        display: flex;
        align-items: center;
        font-size: .35rem;
        span{
          margin-left: .1rem;
        }
        img{
          width: .56rem;
          height: .56rem;
          border: .02rem solid #fff;
          border-radius: 1rem;
          box-shadow: 0 0 .1rem #fff;
        }
      }
      .icon{
        width: .3rem;
        fill: white;
      }
      .signature{
        width: 100%;
        color: rgb(216, 216, 216);
        display: flex;
        span{
          width: 90%;
        }
      }
    }
  }
</style>