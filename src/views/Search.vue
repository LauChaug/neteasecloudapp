<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" v-model="searchKey" :placeholder="searchList[0].ar[0].name" @keydown.enter="updateKeyWord">
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span class="spanKey" v-for="(item,i) in keywordList" :key="i" @click="searchHistory(item)">{{item}}</span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemlist">
    <div class="item" v-for="(item,i) in searchList" :key="i">
      <div class="itemleft" @click="updateIndex(item)">
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
</template>

<script>
  import {getSearchMusic} from '@/request/api/home'
  import { mapMutations,mapState } from 'vuex'
  export default {
    data(){
      return{
        keywordList: JSON.parse(localStorage.getItem('keywordList')) || [],
        searchKey:'',
        searchList:JSON.parse(localStorage.getItem('searchList')) || []
      }
    },
    computed:{
      ...mapState(['playlist'])
    },
    methods:{
      ...mapMutations(['pushPlaylist','updateplaylistindex']),
      async updateKeyWord(){
        if(this.searchKey.trim()){
          this.keywordList.unshift(this.searchKey)
          this.keywordList = [...new Set(this.keywordList)]
          localStorage.setItem('keywordList',JSON.stringify(this.keywordList))
          console.log(this.keywordList.length);
          if(this.keywordList.length > 5){
            this.keywordList.splice(this.keywordList.length-1,1)
            console.log(this.keywordList.length);
          }
          let {data:res} = await getSearchMusic(this.searchKey)
          this.searchList = res.result.songs
          console.log(this.searchList);
          this.searchKey = ''
        }
      },
      async searchHistory(item){
        console.log(item);
        let {data:res} = await getSearchMusic(item)
        this.searchList = res.result.songs
        localStorage.setItem('searchList',JSON.stringify(res.result.songs))
        console.log(this.searchList);
      },
      delHistory(){
        localStorage.removeItem('keywordList')
        this.keywordList = []
      },
      updateIndex(item){
        this.pushPlaylist(item)
        this.updateplaylistindex(this.playlist.length - 1)
      }
    }
  }
</script>

<style scoped lang="less">
  .searchTop{
    width: 100%;
    height: 1rem;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    input{
      width: 90%;
      margin-left: .2rem;
      border: none;
      border-bottom: .02rem solid #999;
      padding: 0.1rem;
    }
  }
  .searchHistory{
    width: 100%;
    padding: .2rem;
    position: relative;
    .searchSpan{
      font-size: .4rem;
      font-weight: bold;
    }
    .spanKey{
      background-color: rgb(156, 136, 136);
      padding: .1rem .2rem;
      border-radius: .4rem;
      margin: .1rem .1rem;
      color: white;
      display: inline-block;
    }
    .icon{
      width: .4rem;
      height: .4rem;
      position: absolute;
      left: 89%;
    }
  }
  .itemlist{
      width: 100%;
      padding: .2rem;
      margin-bottom: 1.4rem;
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
</style>