<!--
  author: USERNAME
  created: 2023年04月03日
  description: 
-->
<template>
  <ex-scroll :ops="{ scrollPanel: { scrollingX: true } }" style="width: 100%">
    <div class="vue-video-draw-area">
        <slot name="area_main_part">
          <div class="area_main_part"></div>
        </slot>
        <svg
          class="draw_area_svg"
          ref="svg"
        >
          <template v-for="area in areaList">
            <!-- 已绘制的区域 -->
            <polyline
              class="polyline"
              :class="{ active: area.isActive }"
              :key="area.id"
              :id="polylineRef + area.id"
              :points="area.points"
              @click.stop="handleOnAcitve(area)"
              v-if="!currentArea.isDraw && area.areaType === 'area'"
            />
            <!-- 正在绘制的区域 -->
            <polyline
              class="polyline"
              :class="{ active: area.isActive }"
              :key="area.id"
              :id="polylineRef + area.id"
              :points="area.points"
              v-if="currentArea.isDraw && area.areaType === 'area'"
            />
            <!-- 已绘制的线 -->
            <line 
              class="svgline" 
              :class="{active: area.isActive}" 
              v-bind="getLinePoint(area.points)" 
              v-if="area.points.length === 2 && area.areaType === 'line'" 
              :key="area.id"
              @click.stop="handleOnAcitve(area)"
            ></line>
          </template>
          <line ref="line" class="svgline active" v-show="isStartDraw" />
        </svg>
        <div
          class="deleteBtn"
          v-if="
            activeArea && !activeArea.isDraw && activeArea.points && activeArea.points.length
          "
          :style="deleteStyle"
        >
          <div class="delete_tips" v-show="activeArea.isTips">
            <h2>提示：</h2>
            <div class="tips_body">
              <span>确定删除并重绘区域吗?</span>
            </div>
            <div class="tips_footer">
              <button class="footer_btn cancel" @click="handleOnCancel(activeArea)">取消</button>
              <button class="footer_btn primary" @click="handleOnConfirm(activeArea)">确定</button>
            </div>
          </div>
          <span @click="handleOnDelete(activeArea)" v-if="!activeArea.isTips">
            <delete-icon style="color: #fff;"></delete-icon>
          </span>
        </div>
    </div>
  </ex-scroll>
</template>

<script>
import ExScroll from './scroll.vue'
import deleteIcon from './deleteIcon.vue'
export default {
  name: "vue-video-draw-area",
  components: {ExScroll, deleteIcon},
  props: {
    initData: {
      type: Array,
      default: () => ([]),
    },
  },
  // 定义属性
  data() {
    return {
      areaList: [],
      svg: null,
      line: null,
      polylineRef: 'polyline',
      isStartDraw: false,
      currentArea: {},
      closeArea: 10,
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    deleteStyle() {
      if (
        !this.activeArea ||
        (this.activeArea.points && !this.activeArea.points.length > 2 && this.activeArea.areaType === 'area') ||
        (this.activeArea.points && this.activeArea.points.length < 2 && this.activeArea.areaType === 'line')
      )
        return {}

      const initP = this.activeArea.points[0].split(',')
      return {
        position: 'absolute',
        left: initP[0] + 'px',
        top: initP[1] + 'px',
        zIndex: 20,
      }
    },
    activeArea() {
      return this.areaList.find(it => it.isActive);
    }
  },
  // 监控data、props中的数据变化
  watch: {
    initData(val) {
      this.areaList = val;
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 初始化画框区域的数据
    if (this.initData && this.initData.length) {
      this.areaList = this.initData;
    }
  },
  mounted() {
    this.svg = this.$refs.svg;
    this.line = this.$refs.line;
    this.initDrawAreaEvent();
  },
  // 方法集合
  methods: {
    initDrawAreaEvent() {
      this.svg.addEventListener('click', this.addEventClickSvg.bind(this));
      this.svg.addEventListener('mousemove', this.addEventMousemoveSvg.bind(this));
      this.svg.addEventListener('contextmenu', this.addEventContextmenuSvg);
      this.svg.addEventListener('mousedown', this.handleMousedownEvent);
    },
    addEventClickSvg(e) {
      if (this.isEmptyObj(this.currentArea)) { return; }
      if (!this.currentArea.isDraw && this.currentArea.points.length > 0)
      { return this.$Messages.warning('已有绘制区域, 请先删除后再绘制'); }
      if (!this.currentArea.isDraw) { return this.$Messages.warning('请点击开始绘制'); }
      
      this.isStartDraw = true;

      if (this.currentArea.areaType === 'area') {
        this.drawArea(e);
      } else {
        this.drawLine(e)
      }
    },
    drawArea(e) {
      console.log('start draw area')
      const id = this.polylineRef + this.currentArea.id
      const polyline = document.getElementById(id)
      const it = e.layerX + ',' + e.layerY
      this.currentArea.points.push(it)
      this.setPolyline(polyline, e)
      this.line.setAttribute('x1', e.layerX)
      this.line.setAttribute('y1', e.layerY)
      if (this.currentArea.points.length > 2) {
        const x = e.layerX
        const y = e.layerY
        const startPoints = this.currentArea.points[0].split(',')
        const sX = Number(startPoints[0])
        const sY = Number(startPoints[1])
        // 假如最后点位在开始点位, 设定值(10px)范围内
        if (Math.abs(sX - x) < this.closeArea && Math.abs(sY - y) < this.closeArea) {
          if (this.currentArea.points.length < 4) {
            this.isStartDraw = false
            this.currentArea.points = []
            return this.$Messages.warning('必须绘制三个点后, 闭合区域, 请重新绘制')
          }
          
          // 将最后一个点替换成开始点位,闭合路径
          const it = sX + ',' + sY
          this.currentArea.points.splice(this.currentArea.points.length - 1, 1, it)
          this.setPolyline(polyline)
          this.isStartDraw = false
          this.currentArea.isDraw = false
          // 更新数据
          this.$emit('finished', this.currentArea);
        }
      }
    },
    drawLine(e) {
      const it = e.layerX + ',' + e.layerY;
      
      this.line.setAttribute('x1', e.layerX)
      this.line.setAttribute('y1', e.layerY)
      if (this.currentArea.points.length < 2) {
        this.currentArea.points.push(it);
      }
      if (this.currentArea.points.length === 2) {
        this.isStartDraw = false;
        this.currentArea.isDraw = false;
      }
    },
    addEventContextmenuSvg(e) {
      e.preventDefault()
    },
    addEventMousemoveSvg(e) {
      this.line.setAttribute('x2', e.layerX)
      this.line.setAttribute('y2', e.layerY)
    },
    handleMousedownEvent(e) {
      e.preventDefault()
      e.stopPropagation()
      const id = this.polylineRef + this.currentArea.id
      const polyline = document.getElementById(id)

      if (e.button !== 2) return

      if (this.currentArea.points.length > 2) {
        const startPoints = this.currentArea.points[0].split(',')
        const sX = Number(startPoints[0])
        const sY = Number(startPoints[1])
        const it = sX + ',' + sY
        this.currentArea.points.push(it)
        this.setPolyline(polyline)
        this.currentArea.isDraw = false

        this.isStartDraw = false
        // 更新数据
      } else {
        this.$Messages.warning('必须绘制三个点后, 闭合区域, 请重新绘制')
        // this.currentArea.points = []
      }

      console.log(e, this.currentArea.points, 'mousemdown =====================')
    },
    removeListener() {
      this.svg.removeEventListener('click', this.addEventClickSvg);
      this.svg.removeEventListener('mousemove', this.addEventMousemoveSvg);
      this.svg.removeEventListener('contextmenu', this.addEventContextmenuSvg);
      this.svg.removeEventListener('mousedown', this.handleMousedownEvent);
    },
    setPolyline(polyline) {
      const pts = this.currentArea.points.join(' ')

      polyline.setAttribute('points', pts)
    },
    getLinePoint(points) {
      const pointFirsts = points[0].split(',');
      const pointSeconds = points[1].split(',');
      return {x1: pointFirsts[0], y1: pointFirsts[1], x2: pointSeconds[0], y2: pointSeconds[1]}
    },
    startDraw(current) {
      if (!current.id) current.id = (this.areaList.length + 1) + '';
      this.currentArea = JSON.parse(JSON.stringify(current));
      this.removeActive();
      this.areaList.push(this.currentArea)
    },
    removeActive() {
      this.areaList = this.areaList.map((it) => {
        it.isActive = false
        it.isTips = false
        return it
      })
    },
    handleOnAcitve(record, idx) {
      this.areaList = this.areaList.map((it) => {
        it.isActive = false
        it.isDraw = false
        return it
      })
      record.isActive = true
    },
    handleOnDelete(area) {
      area.isTips = true;
    },
    handleOnCancel(area) {
      area.isTips = false;
    },
    handleOnConfirm(area) {
      let index = -1;
      this.areaList.forEach((t, i) => {
        if (t.id === area.id) {
          index = i;
        }
      })
      if (index !== -1) {
        this.areaList.splice(index, 1);
      }
      area.isTips = false;
      this.currentArea.isDraw = true;
      this.currentArea.isActive = true;
      this.currentArea.points = [];
      this.startDraw(this.currentArea)
    },
    isEmptyObj(obj) {
      let isEmpty = true
      for (let key in obj) {
        isEmpty = false
      }
      return isEmpty
    },
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {
    this.removeListener();
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang="less" scoped>
.vue-video-draw-area {
  position: relative;
  .area_main_part {
    background-color: #123456;
    width: 1920px;
    height: 1080px;
  }
  .area_main_svg {
  }
  .draw_area_svg {
    position: absolute;
    left: 0;
    top: 0;
    border: 1px dashed #dbd2d2;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    flex-shrink: 1;
    flex-grow: 1;
    box-sizing: border-box;
    .polyline,
    .svgline {
      fill: rgba(#00f, 0.1);
      stroke: rgba(#00f, 0.7);
      stroke-width: 1;
      cursor: pointer;
      &.active {
        fill: rgba(#00f, 0.2);
        stroke: #00f;
        stroke-width: 2;
      }
      &.active:hover {
        fill: rgba(#00f, 0.2);
        stroke: #00f;
        stroke-width: 2;
      }
      &:hover {
        fill: rgba(#00f, 0.2);
        stroke: rgba(#00f, 0.8);
      }
    }
  }
  .deleteBtn {
    .delete_tips {
      border: 1px solid #fff;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 0 12px #333;
      h2 {
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }
      .tips_body {
        padding: 20px 30px 20px 0;
      }
      .tips_footer {
        text-align: right;
        .footer_btn {
          cursor: pointer;
          &.primary {
            border: 1px solid #63b1ff;
            background-color: #027cf7;
            border-radius: 2px;
            color: #fff;
            padding: 2px 10px;
            &:hover {
              background-color: #63abf3;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.message__box {
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #aaaaaa;
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  &.success {
    background-color: rgba(#67C23A, 0.2);
    border-color: #67C23A;
    color: #67C23A;
  }
  &.warning {
    background-color: rgba(#E6A23C, 0.2);
    border-color: #E6A23C;
    color: #E6A23C;
  }
  &.error {
    background-color: rgba(#F56C6C, 0.2);
    border-color: #F56C6C;
    color: #F56C6C;
  }
}
</style>