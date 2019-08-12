// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueLazyload,{
  preload:1.3,
  error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564804805540&di=118a54a7eb40a0532ec77762c518b3ae&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F006IXq7Gzy7aCjWCS1Dcd',
  loading:require('../static/images/loading2.gif'),
  attempt:2
})
