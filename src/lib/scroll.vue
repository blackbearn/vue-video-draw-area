<template>
  <vue-scroll :ops="options">
    <slot></slot>
  </vue-scroll>
</template>

<script>


export default {
  name: 'CustomScroll',
  props: {
    ops: Object,
    default: undefined
  },
  // 定义属性
  data() {
    return {
      options: {
        sizeStrategy: 'number',
        locking: false,
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: false,
          background: '#c1c1c1',
          opacity: 1,
          hoverStyle: true,
          specifyBorderRadius: false,
          minSize: false,
          size: '6px',
          disable: false,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: 'right',
          maxHeight:undefined,
          maxWidth:undefined,
        },
        rail: {
          background: '#01a99a',
          opacity: 0,
          size: '6px',
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: '2px',
          keepShow: false
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: true,
          checkShifKey: true
        }
      }
    }
  },
  created() {
    if (this.ops) {
      // 如果父级传递参数，则用父级参数覆盖默认值
      for (let key in this.ops) {
        if (typeof this.ops[key] === 'object') {
          this.options[key] = Object.assign(this.options[key], this.ops[key])
        } else {
          this.options[key] = this.ops[key];
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .__rail-is-vertical {
  z-index: 100000 !important;
}
</style>