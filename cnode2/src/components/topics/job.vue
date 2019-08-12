<template>
  <div class="job">
    <topic-list :topics="topics"></topic-list>
    <div class="datainfo" v-if="isTip">所有数据已加载完成！</div>
    <infinite-loading @infinite="infiniteHandler" v-if="isShow"></infinite-loading>
  </div>
</template>

<script>
// 引入获取主题数据的模块
import {getTopics} from '@/getdata/topic.js'
import TopicList from '@/components/topics/topicList';
// 引入滑动刷新的组件
import InfiniteLoading from 'vue-infinite-loading'
  export default{
    name:'job',
    data (){
      return{
        topics:[],
        page:1,
        isShow:false,
        isTip:false
      }
    },
    methods:{
      infiniteHandler($state){
        setTimeout(()=> {
          //请求下一页的数据
          getTopics({tab:'job',page:++this.page,limit:20}).then((data)=>{
            //把请求的数据追加到topics数组里
            this.topics=this.topics.concat(data.data.data);
            // 判断下一页还有没有数据
            if(data.data.data.length==0){
              // 没有数据不显示加载圈圈
              this.isShow=false;
              this.isTip=true;
            }
          })
          // 触发infiniteHandler函数
          $state.loaded();
        },1000);
      },
    },
    components: {
      TopicList,
      InfiniteLoading
    },
    //钩子函数
    mounted(){
      getTopics({tab:'job',page:this.page,limit:50}).then((data)=>{
        this.topics=data.data.data;
          this.isShow=true;
      })
    }
  }
</script>
<style lang="scss">
  @import '../../assets/sass/base.scss';
  .job{
    margin-bottom:rem(90px);
  }
</style>
