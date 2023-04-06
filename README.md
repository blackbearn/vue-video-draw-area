# video-draw-area

> A Vue.js project

## Used

### Install
---
``` javascript
npm install video-draw-area
```
### main.js
---

``` javascript
import VideoDrawArea from 'video-draw-area'
Vue.use(VideoDrawArea)
```

### Template
---
``` html
<vue-video-draw-area ref="videoDraw">
</vue-video-draw-area>
```

### Methods
---
``` javascript
drawArea(areaType = 'area') {
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
```

## API

### initData
---
typeof: Array

Description: 初始化画框数据，该数据能在页面绘制之前，显示已有的画框区域

### message
---
typeof: Object

Description: 用户替换页面提示信息 例如：ant-design-vue
```html
# template
<vue-video-draw-area ref="videoDraw" :message="message">
</vue-video-draw-area>
```

```javascript
# vue
export default {
  data() {
    return {
      message: {},
    }
  },
  created() {
    this.message = this.$message;
  }
}
```

### finished
---
typeof: Function

params: options

Description: 返回绘制完成后的当前绘制区域数据


### onmousemove
---
typeof: Function

params: {e, current}

Description: 返回鼠标移动过程中，事件参数、当前区域数据

### onactive
---
typeof: Function

params: options

Description: 返回被选中的区域的数据

## Function

### handleOnAcitve
---
params: record

Description: 预选中区域

### startDraw
---
params:
``` json
{
  "id": [undefined | string], // id: 绘制区域唯一键
  "isActive": true, // 是否默认选中
  "isDraw": true, // 是否绘制区域
  "isTips": false, // 是否展示删除按钮
  "areaType": "area" | "line", // 绘制类型 区域 或 线
  "points": []  // 储存绘制区域的顶点坐标
}
```
Description: 开始绘制区域

## Example

### 替换绘制背景
---
``` bash
## 用视频替换绘制背景
<vue-video-draw-area ref="videoDraw">
  <template slot="area_main_part">
    <video autoplay muted>
      <source src="./assets/tashishui01.mp4">
    </video>
  </template>
</vue-video-draw-area>
```

### 替换删除按钮
---
``` bash
<vue-video-draw-area ref="videoDraw">
  <template slot="deleteIcon">
    <a-icon type="delete" />
  </template>
</vue-video-draw-area>
```

### 替换删除功能
---
``` bash
<vue-video-draw-area ref="videoDraw">
  <template slot="deleteTips" slot-scope="{scope}">
    <a-popconfirm
      title="确定删除并重绘区域吗?"
      ok-text="确定"
      cancel-text="取消"
      @confirm="handleOnDeleteArea(scope)"
      @cancel="e => e"
    >
      <a-button type="primary" size="small" title="重新绘制"><a-icon type="border-inner"/></a-button>
    </a-popconfirm>
  </template>
</vue-video-draw-area>
```

## GitHub
---
For detailed explanation on how things work, consult the [github vue-video-draw-area](https://github.com/blackbearn/vue-video-draw-area).
