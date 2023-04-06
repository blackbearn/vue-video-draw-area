import Vue from 'vue'
import App from './App.vue'
// 滚动条插件
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

import VideoDrawArea from 'video-draw-area'

Vue.use(VideoDrawArea)
Vue.use(vuescroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
