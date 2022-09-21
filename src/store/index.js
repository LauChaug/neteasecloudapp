import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [
      {
        al:{
          id: 9315,
          name: "国产凌凌漆",
          pic: 109951167257411360,
          picUrl: "https://p1.music.126.net/ZaQ5gaLwekpJExIc-d3aoA==/109951167257411359.jpg",
          pic_str: "109951167257411359"
        },
        id: 95447
      }
    ],
    playlistindex: 0, //默认下标为0
    isBtnShow: true,
    detailShow: false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
