<template>
  <div id="app">
    <div class="operation_btn">
      <button @click="drawArea('area')">绘制区域</button>
      <button @click="drawArea('line')">绘制线条</button>
    </div>
    <vue-video-draw-area ref="videoDraw">
      <!-- <template slot="area_main_part">
        <video autoplay muted>
          <source src="./assets/tashishui01.mp4">
        </video>
      </template> -->
    </vue-video-draw-area>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    drawArea(areaType) {
      const current = {
        id: undefined,
        isActive: true,
        isDraw: true,
        isTips: false,
        areaType,
        points: []
      }
      this.$refs.videoDraw.startDraw(current)
    }
  },
}
</script>

<style lang="less">
html, body {
  padding: 0;
  margin: 0;
  #app {
    position: relative;
    .operation_btn {
      position: absolute;
      left: 20px;
      top: 20px;
      z-index: 1000;
    }
  }
}
body {
}
</style>
