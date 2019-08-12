// 引入axios模块(封装的Ajax)
import Axios from 'axios';

//axios基本设置
const $http = Axios.create({
  baseURL: 'https://cnodejs.org/api/v1',  //基础的url
  timeout: 5000,  //超时时间
  headers: {'X-Custom-Header': 'foobar'}  // 头信息
});

// 请求主题 列表
function getTopics(options){
  var newOptions=Object.assign({
    tab:'all',
    limit:50,
    page:1
  },options)
  // console.log(options)
  return $http({
    method:'get',
    url:'/topics',
    params:newOptions,
  })
}

//请求主题详情
function getTopic(topicId){
  return $http.get('/topic/'+topicId)
}

//暴露 功能
export {getTopics,getTopic}
