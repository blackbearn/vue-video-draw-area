!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VideoDrawArea",[],t):"object"==typeof exports?exports.VideoDrawArea=t():e.VideoDrawArea=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=6)}([function(e,t){function r(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=i(n);return[r].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=r(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(i[a]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&i[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){function i(e){for(var t=0;t<e.length;t++){var r=e[t],i=d[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(a(r.parts[n]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{for(var s=[],n=0;n<r.parts.length;n++)s.push(a(r.parts[n]));d[r.id]={id:r.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function a(e){var t,r,i=document.querySelector("style["+m+'~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(y){var a=p++;i=f||(f=n()),t=s.bind(null,i,a,!1),r=s.bind(null,i,a,!0)}else i=n(),t=o.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}function s(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function o(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),g.ssrId&&e.setAttribute(m,t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(10),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,n){v=r,g=n||{};var a=l(e,t);return i(a),function(t){for(var r=[],n=0;n<a.length;n++){var s=a[n],o=d[s.id];o.refs--,r.push(o)}t?(a=l(e,t),i(a)):a=[];for(var n=0;n<r.length;n++){var o=r[n];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete d[o.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,r,i,n,a){var s,o=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),n&&(l._scopeId=n);var d;if(a?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):i&&(d=i),d){var u=l.functional,f=u?l.render:l.beforeCreate;u?(l._injectStyles=d,l.render=function(e,t){return d.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:o,options:l}}},function(e,t,r){"use strict";var i=r(13),n=r(17);t.a={name:"vue-video-draw-area",components:{ExScroll:i.a,deleteIcon:n.a},props:{initData:{type:Array,default:function(){return[]}},message:{type:Object}},data:function(){return{areaList:[],svg:null,line:null,polylineRef:"polyline",isStartDraw:!1,currentArea:{},closeArea:10}},computed:{deleteStyle:function(){if(!this.activeArea||this.activeArea.points&&!this.activeArea.points.length>2&&"area"===this.activeArea.areaType||this.activeArea.points&&this.activeArea.points.length<2&&"line"===this.activeArea.areaType)return{};var e=this.activeArea.points[0].split(",");return{position:"absolute",left:e[0]+"px",top:e[1]+"px",zIndex:20}},activeArea:function(){return this.areaList.find(function(e){return e.isActive})}},watch:{initData:function(e){this.areaList=e},message:function(e){this.$Messages=e}},created:function(){this.message&&(this.$Messages=this.message),this.initData&&this.initData.length&&(this.areaList=this.initData)},mounted:function(){this.svg=this.$refs.svg,this.line=this.$refs.line,this.initDrawAreaEvent()},methods:{initDrawAreaEvent:function(){this.svg.addEventListener("click",this.addEventClickSvg.bind(this)),this.svg.addEventListener("mousemove",this.addEventMousemoveSvg.bind(this)),this.svg.addEventListener("contextmenu",this.addEventContextmenuSvg),this.svg.addEventListener("mousedown",this.handleMousedownEvent)},addEventClickSvg:function(e){if(!this.isEmptyObj(this.currentArea)){if(!this.currentArea.isDraw&&this.currentArea.points.length>0)return this.$Messages.warning("已有绘制区域, 请先删除后再绘制");if(!this.currentArea.isDraw)return this.$Messages.warning("请点击开始绘制");this.isStartDraw=!0,"area"===this.currentArea.areaType?this.drawArea(e):this.drawLine(e)}},drawArea:function(e){console.log("start draw area");var t=this.polylineRef+this.currentArea.id,r=document.getElementById(t),i=e.layerX+","+e.layerY;if(this.currentArea.points.push(i),this.setPolyline(r,e),this.line.setAttribute("x1",e.layerX),this.line.setAttribute("y1",e.layerY),this.currentArea.points.length>2){var n=e.layerX,a=e.layerY,s=this.currentArea.points[0].split(","),o=Number(s[0]),c=Number(s[1]);if(Math.abs(o-n)<this.closeArea&&Math.abs(c-a)<this.closeArea){if(this.currentArea.points.length<4)return this.isStartDraw=!1,this.currentArea.points=[],this.$Messages.warning("必须绘制三个点后, 闭合区域, 请重新绘制");var l=o+","+c;this.currentArea.points.splice(this.currentArea.points.length-1,1,l),this.setPolyline(r),this.isStartDraw=!1,this.currentArea.isDraw=!1,this.$emit("finished",this.currentArea)}}},drawLine:function(e){var t=e.layerX+","+e.layerY;this.line.setAttribute("x1",e.layerX),this.line.setAttribute("y1",e.layerY),this.currentArea.points.length<2&&this.currentArea.points.push(t),2===this.currentArea.points.length&&(this.isStartDraw=!1,this.currentArea.isDraw=!1,this.$emit("finished",this.currentArea))},addEventContextmenuSvg:function(e){e.preventDefault()},addEventMousemoveSvg:function(e){this.line.setAttribute("x2",e.layerX),this.line.setAttribute("y2",e.layerY),this.$emit("onmousemove",{e:e,current:this.currentArea})},handleMousedownEvent:function(e){e.preventDefault(),e.stopPropagation();var t=this.polylineRef+this.currentArea.id,r=document.getElementById(t);if(2===e.button){if(this.currentArea.points.length>2){var i=this.currentArea.points[0].split(","),n=Number(i[0]),a=Number(i[1]),s=n+","+a;this.currentArea.points.push(s),this.setPolyline(r),this.currentArea.isDraw=!1,this.isStartDraw=!1,this.$emit("finished",this.currentArea)}else this.$Messages.warning("必须绘制三个点后, 闭合区域, 请重新绘制");console.log(e,this.currentArea.points,"mousemdown =====================")}},removeListener:function(){this.svg.removeEventListener("click",this.addEventClickSvg),this.svg.removeEventListener("mousemove",this.addEventMousemoveSvg),this.svg.removeEventListener("contextmenu",this.addEventContextmenuSvg),this.svg.removeEventListener("mousedown",this.handleMousedownEvent)},setPolyline:function(e){var t=this.currentArea.points.join(" ");e.setAttribute("points",t)},getLinePoint:function(e){var t=e[0].split(","),r=e[1].split(",");return{x1:t[0],y1:t[1],x2:r[0],y2:r[1]}},startDraw:function(e){e.id||(e.id=this.areaList.length+1+""),this.currentArea=JSON.parse(JSON.stringify(e)),this.removeActive(),this.areaList.push(this.currentArea)},removeActive:function(){this.areaList=this.areaList.map(function(e){return e.isActive=!1,e.isTips=!1,e})},handleOnAcitve:function(e){this.areaList=this.areaList.map(function(e){return e.isActive=!1,e.isDraw=!1,e}),e.isActive=!0,this.$emit("onactive",e)},handleOnDelete:function(e){e.isTips=!0},handleOnCancel:function(e){e.isTips=!1},handleOnConfirm:function(e){var t=-1;this.areaList.forEach(function(r,i){r.id===e.id&&(t=i)}),-1!==t&&this.areaList.splice(t,1),e.isTips=!1,this.currentArea.isDraw=!0,this.currentArea.isActive=!0,this.currentArea.points=[],this.startDraw(this.currentArea),this.$emit("ondelete",e)},isEmptyObj:function(e){var t=!0;for(var r in e)t=!1;return t}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){this.removeListener()},activated:function(){}}},function(e,t,r){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={name:"CustomScroll",props:{ops:Object,default:void 0},data:function(){return{options:{sizeStrategy:"number",locking:!1,bar:{showDelay:500,onlyShowBarOnScroll:!1,keepShow:!1,background:"#c1c1c1",opacity:1,hoverStyle:!0,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!1,scrollingY:!0,speed:300,easing:void 0,verticalNativeBarPos:"right",maxHeight:void 0,maxWidth:void 0},rail:{background:"#01a99a",opacity:0,size:"6px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"2px",keepShow:!1},vuescroll:{wheelScrollDuration:0,wheelDirectionReverse:!0,checkShifKey:!0}}}},created:function(){if(this.ops)for(var e in this.ops)"object"===i(this.ops[e])?this.options[e]=Object.assign(this.options[e],this.ops[e]):this.options[e]=this.ops[e]}}},function(e,t,r){"use strict";t.a={name:"deleteIcon",data:function(){return{}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),n=r(22),a={install:function(e,t){e.prototype.$Messages=n.a,"undefined"!=typeof window&&window.Vue?window.Vue.use(i.a):e.component(i.a.name,i.a)}};t.default=a},function(e,t,r){"use strict";function i(e){r(8),r(11)}var n=r(3),a=r(21),s=r(2),o=i,c=s(n.a,a.a,!1,o,"data-v-026477f4",null);t.a=c.exports},function(e,t,r){var i=r(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(1)("05d388c6",i,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".vue-video-draw-area[data-v-026477f4]{position:relative}.vue-video-draw-area .area_main_part[data-v-026477f4]{background-color:#123456;width:1920px;height:1080px}.vue-video-draw-area .draw_area_svg[data-v-026477f4]{position:absolute;left:0;top:0;border:1px dashed #dbd2d2;height:100%;width:100%;right:0;bottom:0;flex-shrink:1;flex-grow:1;box-sizing:border-box}.vue-video-draw-area .draw_area_svg .polyline[data-v-026477f4],.vue-video-draw-area .draw_area_svg .svgline[data-v-026477f4]{fill:rgba(0,0,255,.1);stroke:rgba(0,0,255,.7);stroke-width:1;cursor:pointer}.vue-video-draw-area .draw_area_svg .polyline.active[data-v-026477f4],.vue-video-draw-area .draw_area_svg .polyline.active[data-v-026477f4]:hover,.vue-video-draw-area .draw_area_svg .svgline.active[data-v-026477f4],.vue-video-draw-area .draw_area_svg .svgline.active[data-v-026477f4]:hover{fill:rgba(0,0,255,.2);stroke:#00f;stroke-width:2}.vue-video-draw-area .draw_area_svg .polyline[data-v-026477f4]:hover,.vue-video-draw-area .draw_area_svg .svgline[data-v-026477f4]:hover{fill:rgba(0,0,255,.2);stroke:rgba(0,0,255,.8)}.vue-video-draw-area .deleteBtn .delete_tips[data-v-026477f4]{border:1px solid #fff;background-color:#f5f5f5;padding:10px;border-radius:4px;box-shadow:0 0 12px #333}.vue-video-draw-area .deleteBtn .delete_tips h2[data-v-026477f4]{padding:0;margin:0;font-size:16px;font-weight:600}.vue-video-draw-area .deleteBtn .delete_tips .tips_body[data-v-026477f4]{padding:20px 30px 20px 0}.vue-video-draw-area .deleteBtn .delete_tips .tips_footer[data-v-026477f4]{text-align:right}.vue-video-draw-area .deleteBtn .delete_tips .tips_footer .footer_btn[data-v-026477f4]{cursor:pointer}.vue-video-draw-area .deleteBtn .delete_tips .tips_footer .footer_btn.primary[data-v-026477f4]{border:1px solid #63b1ff;background-color:#027cf7;border-radius:2px;color:#fff;padding:2px 10px}.vue-video-draw-area .deleteBtn .delete_tips .tips_footer .footer_btn.primary[data-v-026477f4]:hover{background-color:#63abf3}",""])},function(e,t){e.exports=function(e,t){for(var r=[],i={},n=0;n<t.length;n++){var a=t[n],s=a[0],o=a[1],c=a[2],l=a[3],d={id:e+":"+n,css:o,media:c,sourceMap:l};i[s]?i[s].parts.push(d):r.push(i[s]={id:s,parts:[d]})}return r}},function(e,t,r){var i=r(12);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(1)("75f80ce1",i,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".message__box{padding:10px 20px;border-radius:4px;background-color:#aaa;display:inline-block;position:fixed;left:50%;top:5%;transform:translateX(-50%);font-size:14px;border-width:1px;border-style:solid}.message__box.success{background-color:rgba(103,194,58,.2);border-color:#67c23a;color:#67c23a}.message__box.warning{background-color:rgba(230,162,60,.2);border-color:#e6a23c;color:#e6a23c}.message__box.error{background-color:hsla(0,87%,69%,.2);border-color:#f56c6c;color:#f56c6c}",""])},function(e,t,r){"use strict";function i(e){r(14)}var n=r(4),a=r(16),s=r(2),o=i,c=s(n.a,a.a,!1,o,"data-v-ef40a0e8",null);t.a=c.exports},function(e,t,r){var i=r(15);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(1)("3a66a366",i,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,"[data-v-ef40a0e8] .__rail-is-vertical{z-index:100000!important}",""])},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("vue-scroll",{attrs:{ops:e.options}},[e._t("default")],2)},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,r){"use strict";function i(e){r(18)}var n=r(5),a=r(20),s=r(2),o=i,c=s(n.a,a.a,!1,o,"data-v-7614620a",null);t.a=c.exports},function(e,t,r){var i=r(19);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(1)("83352614",i,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".deleteIcon[data-v-7614620a]{background-color:#00aeff;border:1px solid rgba(0,174,255,.5);padding:2px;display:flex;align-items:center;justify-content:center;border-radius:4px;cursor:pointer}.deleteIcon[data-v-7614620a]:hover{background-color:rgba(0,174,255,.8)}",""])},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"deleteIcon"},[r("svg",{staticClass:"icon",attrs:{t:"1680591603819",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6875",width:"24",height:"24"}},[r("path",{attrs:{d:"M768 384c-19.2 0-32 12.8-32 32l0 377.6c0 25.6-19.2 38.4-38.4 38.4L326.4 832c-25.6 0-38.4-19.2-38.4-38.4L288 416C288 396.8 275.2 384 256 384S224 396.8 224 416l0 377.6c0 57.6 44.8 102.4 102.4 102.4l364.8 0c57.6 0 102.4-44.8 102.4-102.4L793.6 416C800 396.8 787.2 384 768 384z",fill:"currentColor","p-id":"6876"}}),r("path",{attrs:{d:"M460.8 736l0-320C460.8 396.8 448 384 435.2 384S396.8 396.8 396.8 416l0 320c0 19.2 12.8 32 32 32S460.8 755.2 460.8 736z",fill:"currentColor","p-id":"6877"}}),r("path",{attrs:{d:"M627.2 736l0-320C627.2 396.8 608 384 588.8 384S563.2 396.8 563.2 416l0 320C563.2 755.2 576 768 588.8 768S627.2 755.2 627.2 736z",fill:"currentColor","p-id":"6878"}}),r("path",{attrs:{d:"M832 256l-160 0L672 211.2C672 166.4 633.6 128 588.8 128L435.2 128C390.4 128 352 166.4 352 211.2L352 256 192 256C172.8 256 160 268.8 160 288S172.8 320 192 320l640 0c19.2 0 32-12.8 32-32S851.2 256 832 256zM416 211.2C416 198.4 422.4 192 435.2 192l153.6 0c12.8 0 19.2 6.4 19.2 19.2L608 256l-192 0L416 211.2z",fill:"currentColor","p-id":"6879"}})])])},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ex-scroll",{staticStyle:{width:"100%"},attrs:{ops:{scrollPanel:{scrollingX:!0}}}},[r("div",{staticClass:"vue-video-draw-area"},[e._t("area_main_part",function(){return[r("div",{staticClass:"area_main_part"})]}),e._v(" "),r("svg",{ref:"svg",staticClass:"draw_area_svg"},[e._l(e.areaList,function(t){return[e.currentArea.isDraw||"area"!==t.areaType?e._e():r("polyline",{key:t.id,staticClass:"polyline",class:{active:t.isActive},attrs:{id:e.polylineRef+t.id,points:t.points},on:{click:function(r){return r.stopPropagation(),e.handleOnAcitve(t)}}}),e._v(" "),e.currentArea.isDraw&&"area"===t.areaType?r("polyline",{key:t.id,staticClass:"polyline",class:{active:t.isActive},attrs:{id:e.polylineRef+t.id,points:t.points}}):e._e(),e._v(" "),2===t.points.length&&"line"===t.areaType?r("line",e._b({key:t.id,staticClass:"svgline",class:{active:t.isActive},on:{click:function(r){return r.stopPropagation(),e.handleOnAcitve(t)}}},"line",e.getLinePoint(t.points),!1)):e._e()]}),e._v(" "),r("line",{directives:[{name:"show",rawName:"v-show",value:e.isStartDraw,expression:"isStartDraw"}],ref:"line",staticClass:"svgline active"})],2),e._v(" "),e.activeArea&&!e.activeArea.isDraw&&e.activeArea.points&&e.activeArea.points.length?r("div",{staticClass:"deleteBtn",style:e.deleteStyle},[e._t("deleteTips",function(){return[r("div",{directives:[{name:"show",rawName:"v-show",value:e.activeArea.isTips,expression:"activeArea.isTips"}],staticClass:"delete_tips"},[r("h2",[e._v("提示：")]),e._v(" "),r("div",{staticClass:"tips_body"},[r("span",[e._v("确定删除并重绘区域吗?")])]),e._v(" "),r("div",{staticClass:"tips_footer"},[r("button",{staticClass:"footer_btn cancel",on:{click:function(t){return e.handleOnCancel(e.activeArea)}}},[e._v("取消")]),e._v(" "),r("button",{staticClass:"footer_btn primary",on:{click:function(t){return e.handleOnConfirm(e.activeArea)}}},[e._v("确定")])])]),e._v(" "),e.activeArea.isTips?e._e():r("span",{on:{click:function(t){return e.handleOnDelete(e.activeArea)}}},[e._t("deleteIcon",function(){return[r("delete-icon",{staticStyle:{color:"#fff"}})]})],2)]},{scope:e.activeArea})],2):e._e()],2)])},n=[],a={render:i,staticRenderFns:n};t.a=a},function(e,t,r){"use strict";t.a={warning:function(e,t){t=t||2e3,this.createMessage(e,"warning",t)},createMessage:function(e,t,r){this.removeAllMessage();var i=document.createElement("div");i.className="message__box "+t,i.innerHTML=e,document.body.appendChild(i),setTimeout(function(){document.body.removeChild(i)},r)},removeAllMessage:function(){for(var e=document.getElementsByClassName("message__box"),t=0;t<e.length;t++){var r=e[t];r&&document.body.removeChild(r)}}}}])});
//# sourceMappingURL=vue-video-draw-area.js.map