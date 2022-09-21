<template>
  <div>
    <TopNav></TopNav>
    <SwiperTop></SwiperTop>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from '@/components/home/topNav'
import SwiperTop from "@/components/home/SwiperTop"
import IconList from '@/components/home/IconList'
import MusicList from '@/components/home/MusicList'
export default {
  name: 'HomeView',
  components: {
    SwiperTop,
    TopNav,
    IconList,
    MusicList
  }
}
</script>
