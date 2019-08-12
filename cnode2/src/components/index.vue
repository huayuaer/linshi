<template>
  <div class="index">
    <nav class="top">
      <router-link to="/index" class="item" tag="div">全部</router-link>
      <router-link to="/index/good" class="item" tag="div">精华</router-link>
      <router-link to="/index/share" class="item" tag="div">分享</router-link>
      <router-link to="/index/ask" class="item" tag="div">问答</router-link>
      <router-link to="/index/job" class="item" tag="div">招聘</router-link>
      <router-link to="/index/dev" class="item" tag="div">客户端测试</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name:'index',
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/sass/base.scss';
  // 顶部导航
  nav.top{
    position:fixed;
    top:rem(85px);
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width:100%;
    height:rem(80px);
    background:#f6f6f6;
    .item{
      // width:rem(75px);
      // height:rem(45px);
      padding:rem(12px) rem(16px);
      border-radius: rem(5px);
      font-size: rem(30px);
      color:#8dbb39;
      font-weight: bold;
    }
    .router-link-exact-active{
      background:#8dbb39;
      color:#fff;
    }
  }
</style>
