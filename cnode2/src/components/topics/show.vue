<template>
 <div class="show">
   <div class="header">
     <div class="tab">
       <div class="top" v-if="topic.top">置顶</div>
       <div class="goods" v-else-if="topic.good">精华</div>
       <div v-else>{{tabs[topic.tab]}}</div>
     </div>
     <h2 class="title">{{topic.title}}</h2>
   </div>
   <div class="info">作者：<span>{{loginname}}</span></div>
   <div class="content" v-html="content"></div>
 </div>
</template>

<script>
  // import axios from 'axios'
  import {getTopic} from '@/getdata/topic.js'

export default {
  name: 'show',
  data () {
    return {
      topic:'',
      tab:'',
      tabs:{"ask":"问答","share":"分享","job":"招聘","dev":"测试"},
      loginname:'',
      content:''

    }
  },
  //钩子函数
  mounted(){
    // console.log(this.$route.params.id);
    var topicId=this.$route.params.id;
    getTopic(topicId).then((data)=>{
      console.log(data.data.data)
      this.topic=data.data.data;
      this.loginname=data.data.data.author.loginname;
      this.tab=data.data.data.tab;
      this.top=data.data.data.top;
      this.good=data.data.data.good;
      this.content=data.data.data.content;
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
  .show{
    width:rem(720px);
    margin:rem(190px) auto;
    .header{
      display:flex;
      .tab{
        margin:0 rem(20px);
        div{
          width:rem(70px);
          height:rem(50px);
          background:#e5e5e5;
          color:#999;
          font-size:rem(26px);
          text-align:center;
          line-height: rem(50px);
          border-radius: rem(10px);
          &.top{
            color:#fff;
            background:#8dbb39;
          }
          &.goods{
            color:#fff;
            background:red;
          }
        }
      }
      .title{
        font-size:rem(40px);
        color:#333;
        font-weight:bold;
        line-height:rem(50px);
      }
    }
    .info{
      color:#333;
      line-height: rem(80px);
      font-size: rem(30px);
      padding-left:rem(50px);
      border-bottom:rem(1px) solid #999;
    }
    .content{
      width:100%;
      overflow:hidden;
      font-size: rem(30px);
      img{
        width:100%;
      }
    }
  }
  /deep/ img{
    width:100%;
  }
</style>
