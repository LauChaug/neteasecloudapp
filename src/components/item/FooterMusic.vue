<template>
  <div class="footermusic">
    <div class="footerleft" @click="updateDetailShow">
      <img :src="playlist[playlistindex].al.picUrl">
      <div>
        <p> {{playlist[playlistindex].name}} </p>
        <span>横滑可切换上下首噢</span>
      </div>
    </div>
    <div class="footerright">
      <svg class="icon bofang" aria-hidden="true" @click="playmusic" v-if="isBtnShow">
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" @click="playmusic" v-else>
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-yinleliebiao"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistindex].id}.mp3`"></audio>
    <van-popup 
    v-model:show="detailShow" 
    position="right" 
    :style="{ height: '100%',width: '100%' }">
      <MusicDetail 
      :musiclist="playlist[playlistindex]" 
      :playmusic="playmusic" 
      :isBtnShow="isBtnShow"
      :addDuration="addDuration"
      />
    </van-popup>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import MusicDetail from '@/components/item/MusicDetail'
  export default {
    data(){
      return{
        interVal:0
      }
    },
    components:{
      MusicDetail
    },
    computed:{
      ...mapState(['playlist','playlistindex','isBtnShow','detailShow'])
    },
    methods:{
      ...mapMutations(['updateIsBtnShow','updateDetailShow','updateCurrentTime','updateDuration']),
      playmusic(){
        if(this.$refs.audio.paused){
          this.$refs.audio.play()
          this.updateIsBtnShow(false)
          this.updateTime()
        }else{
          this.$refs.audio.pause()
          this.updateIsBtnShow(true)
          clearInterval(this.interVal)
        }
      },
      addDuration(){
        this.updateDuration(this.$refs.audio.duration)
      },
      updateTime(){
        this.interVal = setInterval(() => {
          this.updateCurrentTime(this.$refs.audio.currentTime)
        }, 500);
      }
    },
    watch:{
      playlistindex(){
        this.$refs.audio.autoplay = true
        this.updateIsBtnShow(false)
      },
      playlist(){
        if(this.isBtnShow){
          this.$refs.audio.autoplay = true
          this.updateIsBtnShow(false)
        }
      }
    },
    updated(){
      this.addDuration()
      this.$store.dispatch('getLyric',this.playlist[this.playlistindex].id)
      // console.log(this.playlist[this.playlistindex].id);
    },
    mounted(){
      console.log(this.$refs);
      this.$store.dispatch('getLyric',this.playlist[this.playlistindex].id)
    },
  }
</script>

<style scoped lang="less">
  .footermusic{
    width: 100%;
    height: 1.4rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    .footerleft{
      width: 60%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      // align-items: center;
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      div{
        width: 3.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: .4rem;
        p{
          height: 0.45rem;
          width: 100%;
          font-size: .35rem;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span{
          font-size: 100%;
          color: rgb(122, 122, 122);
        }
      }
    }
    .footerright{
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon{
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
</style>