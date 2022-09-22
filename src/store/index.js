import { createStore } from 'vuex'
import { getMusicLyric } from "@/request/api/item";

export default createStore({
  state: {
    playlist: [
      {
        al:{
          id: 18934,
          name: "Leslie Cheung Four Seasons",
          pic: 109951165992420030,
          picUrl: "https://p1.music.126.net/0rkwYwCrCNy3027wywsFrQ==/109951165992420035.jpg",
          pic_str: "109951165992420035"
        },
        id: 29343374,
        ar:[
          {
            name:"张国荣"
          }
        ],
        name: "怪你过份美丽"
      }
    ],
    playlistindex: 0, //默认下标为0
    isBtnShow: true,
    detailShow: false,
    lyricList:{}, 
    currentTime:0
  },
  getters: {
  },
  mutations: {
    updateIsBtnShow(state,value){
      state.isBtnShow = value
    },
    updatePlayList(state,value){
      state.playlist = value
      console.log(state.playlist);
    },
    updateplaylistindex(state,value){
      state.playlistindex = value
      console.log(state.playlistindex);
    },
    updateDetailShow(state){
      state.detailShow = !state.detailShow
    },
    updateLyricList(state,value){
      state.lyricList = value
      console.log(state.lyricList);
    },
    updateCurrentTime(state,value){
      console.log(state.currentTime);
      state.currentTime = value
    }
  },
  actions: {
    async getLyric(context,value){
      const {data:res} = await getMusicLyric(value)
      console.log(res);
      context.commit('updateLyricList',res.lrc)
    }
  },
  modules: {
  }
})
