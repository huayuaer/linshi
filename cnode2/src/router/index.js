import Vue from 'vue'
import Router from 'vue-router'


// 引入组件
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Code from '../components/code'
import Me from '../components/Me'

// 引入主题相关的组件
import All from '@/components/topics/all'
import Good from '@/components/topics/good'
import Share from '@/components/topics/share'
import Ask from '@/components/topics/ask'
import Job from '@/components/topics/job'
import Dev from '@/components/topics/dev'
import Loading from '@/components/topics/loading'
import Show from '@/components/topics/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          name:'all',
          component:All,

        },
        {
          path:'good',
          name:'good',
          component:Good,
        },
        {
          path:'share',
          name:'share',
          component:Share,
        },
        {
          path:'ask',
          name:'ask',
          component:Ask,
        },
        {
          path:'job',
          name:'job',
          component:Job,
        },
        {
          path:'dev',
          name:'dev',
          component:Dev,
        },
        {
          path:'show/:id',
          name:'show',
          component:Show
        }
      ]
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    // 路由跳转
    {
      path: '/*',
      redirect:'/index'
    },
  ]
})
