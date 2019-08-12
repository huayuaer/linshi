<template>
  <div class="me">
    <div class="play">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../static/images/90487.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90488.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90489.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90490.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90491.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90492.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90493.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/images/90494.jpg" alt=""></div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  //swiper  js文件
  import Swiper from 'swiper';
  // swiper  css文件
  import 'swiper/dist/css/swiper.min.css';
  export default{
    name:'Me',
    data(){
      return{

      }
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type:'fraction'
        },
        autoplay:true,
      });
    }
  }

  //这样写有bug，当切换到其它页面后再切换回来就不可以滑动了,解决办法，写在钩子函数中
   /* window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
  } */
</script>

<style lang="scss">
  @import '../assets/sass/base.scss';
  .me{
    width:rem(720px);
    margin:0 auto;
    margin-top:rem(100px);
    .play{
      width:100%;
      .swiper-container{
        width:100%;
        img{width:100%}
        .swiper-pagination{
          color:#fff;
        }
      }
    }
  }

</style>
