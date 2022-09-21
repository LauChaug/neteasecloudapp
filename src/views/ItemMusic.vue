<template>
  <div>
    <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
    <ItemMusicTitle :playlist="state.playlist"></ItemMusicTitle>
    <ItemMusicList :playlist="state.playlist"></ItemMusicList>
    <ItemMusicPlayList :songsList="state.songsList" :subscribedCount="state.playlist.subscribedCount"></ItemMusicPlayList>
  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
import {useRoute} from 'vue-router'
import {getMusicItemList,getItemList} from '@/request/api/item'
import ItemMusicTop from '@/components/item/ItemMusicTop'
import ItemMusicTitle from '@/components/item/ItemMusicTitle'
import ItemMusicList from '@/components/item/ItemMusicList'
import ItemMusicPlayList from '@/components/item/ItemMusicPlayList'
  export default {
    setup(){
      const state = reactive({
        playlist: {},
        songsList: []
      })
      onMounted( async ()=> {
        let id = useRoute().query.id
        console.log(id);
        // 获取歌单详情页
        let {data:res} = await getMusicItemList(id)
        state.playlist = res.playlist
        console.log(res);
        // 获取歌曲列表
        let res1 = await getItemList(id)
        console.log(res1);
        state.songsList = res1.data.songs
        console.log(state.songsList);
        // 为了防止页面刷新时数据丢失，将数据保存到webstorage
        localStorage.setItem('itemDetail',JSON.stringify(state))
      })
      return { state }
    },
    components:{
      ItemMusicTop,
      ItemMusicTitle,
      ItemMusicList,
      ItemMusicPlayList
    }
  }
</script>

<style scoped lang="less">
  
</style>