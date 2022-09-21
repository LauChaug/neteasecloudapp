<template>
  <div class="container">
    <div class="listitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zaixianliuyan"></use>
      </svg>
      <span>{{playlist.commentCount}}</span>
    </div>
    <div class="listitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{playlist.shareCount}}</span>
    </div>
    <div class="listitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-download"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="listitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
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
  .container{
    display: flex;
    justify-content: space-around;
    margin-top: .3rem;
    .icon{
      fill: white;
    }
    .listitem{
      display: flex;
      align-items: center;
      flex-direction: column;
      span{
        color: white;
      }
    }
  }
</style>