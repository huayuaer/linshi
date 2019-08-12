<template>
  <div class="alls">
    <!-- loading 组件 -->
    <loading v-if="!topics.length"></loading>
    <router-link :to="'/index/show/'+topic.id" tag="div" class="topic" v-for="(topic,index) in topics" :key="topic.index">
      <!-- <img :src="topic.author.avatar_url" alt=""> -->
      <img v-lazy="topic.author.avatar_url">
      <div class="tab">
        <div class="top" v-if="topic.top">置顶</div>
        <div class="goods" v-else-if="topic.good">精华</div>
        <div v-else>{{tabs[topic.tab]}}</div>
      </div>
      <div class="title">{{topic.title}}</div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入获取主题数据的模块
import {getTopics} from '@/getdata/topic.js'
// 引入loading组件
import Loading from "./loading"
  export default{
    name:'all',
    data (){
      return{
        // topics:[],
        tabs:{"ask":"问答","share":"分享","job":"招聘","dev":"测试"}
      }
    },
    //钩子函数
    mounted(){
     /* getTopics({tab:'all',page:1,limit:50}).then((data)=>{
        this.topics=data.data.data;
      }) */
    },
    props:['topics'],
    //加载组件
    components:{
      Loading
    }
  }
</script>

<style lang="sass">
  @import '../../assets/sass/topicList.scss'
</style>
