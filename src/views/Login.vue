<template>
  <div class="login">
    <div class="loginTop">
      欢迎登录
    </div>
    <div class="loginContent">
      <input v-model="phone" type="text" name="phone" class="phone" placeholder="请输入手机号...">
      <input v-model="password" type="password" name="password" class="password" placeholder="请输入密码...">
    </div>
    <button class="btn" @click="login">登录</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { getUserDetail } from '@/request/api/home'
  export default {
    data(){
      return{
        phone: '',
        password: ''
      }
    },
    methods:{
      // ...mapActions(['getLogin']),
      ...mapMutations(['updateToken','updateIsLogin','updateUser']),
      async login(){
        const res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
        if(res.data.code === 200){
          this.updateIsLogin(true)
          this.updateToken(res.data.token)
          const result = await getUserDetail(res.data.account.id)
          this.updateUser(result)
          localStorage.setItem('token',state.token)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .login{
    width: 100%;
    height: 13.34rem;
    padding: .2rem;
    background-color: rgb(248, 97, 97);
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginTop{
      color: white;
      font-size: .8rem;
      font-weight: 500;
      margin-top: 2.5rem;
    }
    .loginContent{
      width: 100%;
      height: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      input{
        border: none;
        width: 80%;
        height: 0.9rem;
        padding: 0.5rem 0;
      }
    }
    .btn{
      border: none;
      width: 2rem;
      height: 1rem;
      font-weight: bold;
      font-size: 0.4rem;
      background-color: white;
      color: rgb(248, 97, 97);
    }
  }
</style>