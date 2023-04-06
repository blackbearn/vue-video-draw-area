import Vue from 'vue'
import App from './App.vue'
// 滚动条插件
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

import vueVideoDrawArea from './lib'

Vue.use(vueVideoDrawArea)
Vue.use(vuescroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
