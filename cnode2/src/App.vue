<template>
  <div id="app">
    <!-- banner -->
    <div class="banner">
      <span class="iconfont icon-logo"></span>
    </div>
    <!-- banner END -->
    <!-- <p>{{$route.path}}</p> -->
    <!-- <p>{{resPath}}</p> -->
    <!-- 底部导航 -->
    <nav class="bottom">
      <router-link to="/" tag="div" :class="resPath=='index'?'active':''">
        <span class="iconfont" :class='resPath=="index"?"icon-yemian":"icon-shouye"'></span>
        <p>首页</p>
      </router-link>
      <router-link to="/code" tag="div" :class="resPath=='code'?'active':''">
        <span class="iconfont" :class='resPath=="code"?"icon-erweima":"icon-erweima1"'></span>
        <p>二维码</p>
      </router-link>
      <router-link to="/me" tag="div" :class="resPath=='me'?'active':''">
        <span class="iconfont"  :class='resPath=="me"?"icon-wode1":"icon-wode"'></span>
        <p>我的</p>
      </router-link>
    </nav>
    <!-- 底部导航  END-->


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath:function(){
      var arr=this.$route.path.split('/');
      console.log(arr);
      return arr[1];
    }
  }
}
</script>

<style lang="scss">
// 引入基础scss
@import './assets/sass/base.scss';
  .banner{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:rem(85px);
    background:#444;
    text-align: center;
    span{
      font-size: rem(50px);
      color:#fff;
      ane-height: rem(85px);
    }
  }
  /* 底部导航 */
  nav.bottom{
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:rem(90px);
    border-top:rem(1px) solid #b3b3b3;
    background:#fff;
    div{
      display:block;
      width:33.3%;
      text-align:center;
      color:#333;
      span{
        font-size: rem(45px);
        line-height: rem(55px);
      }
      p{
        font-size:rem(25px);
      }
    }
    .active{
      color:#fff;
      background:#333;
    }
  }
</style>
