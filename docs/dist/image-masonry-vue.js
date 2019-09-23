!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ImageMasonryExample=t()}(this,function(){"use strict";var e=[{src:"images/a-small.jpg",width:400,height:300},{src:"images/b-small.jpg",width:400,height:300},{src:"images/c-small.jpg",width:300,height:400},{src:"images/d-small.jpg",width:300,height:400},{src:"images/e-small.jpg",width:300,height:400},{src:"images/f-small.jpg",width:400,height:300},{src:"images/g-small.jpg",width:400,height:300},{src:"images/h-small.jpg",width:300,height:400},{src:"images/i-small.jpg",width:300,height:400},{src:"images/j-small.jpg",width:833,height:250},{src:"images/k-small.jpg",width:400,height:300},{src:"images/l-small.jpg",width:300,height:400},{src:"images/m-small.jpg",width:400,height:300},{src:"images/n-small.jpg",width:400,height:300},{src:"images/o-small.jpg",width:400,height:300},{src:"images/p-small.jpg",width:300,height:400},{src:"images/q-small.jpg",width:400,height:300},{src:"images/r-small.jpg",width:400,height:300},{src:"images/s-small.jpg",width:400,height:200},{src:"images/t-small.jpg",width:400,height:300},{src:"images/u-small.jpg",width:400,height:300},{src:"images/v-small.jpg",width:400,height:300},{src:"images/w-small.jpg",width:300,height:400},{src:"images/x-small.jpg",width:833,height:250},{src:"images/y-small.jpg",width:400,height:300},{src:"images/z-small.jpg",width:300,height:400},{src:"images/zz-small.jpg",width:400,height:300}];function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}var _={single_source_shortest_paths:function(e,t,i){var n={},r={};r[t]=0;var s,a,o,c,d,h,l=new m(function(e){return e.cost});for(l.push({value:t,cost:0});l.size();)for(var g in a=(s=l.pop()).value,o=s.cost,c=e(a)||{})d=o+c[g],h=r[g],(void 0===r[g]||d<h)&&(r[g]=d,l.push({value:g,cost:d}),n[g]=a);if(void 0!==r[i])return n;var u=["Could not find a path from ",t," to ",i,"."].join("");throw new Error(u)},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],n=t;n;)i.push(n),e[n],n=e[n];return i.reverse(),i},find_path:function(e,t,i){var n=_.single_source_shortest_paths(e,t,i);return _.extract_shortest_path_from_predecessor_list(n,i)}};function m(e){this.content=[],this.scoreFunction=e}function v(e){return Math.round(100*e+Number.EPSILON)/100}function b(e,t,i){return function(e,t){return v(e/t)}(t-(e.length-1)*i,e.reduce(function(e,t){return e+t.ratio},0))}function i(e){for(var t=0<arguments.length&&void 0!==e?e:{},i=t.images,d=t.containerWidth,h=t.targetHeight,n=t.padding,l=void 0===n?2:n,r=t.seekLimit,g=void 0===r?8:r,s=t.byRow,a=void 0===s||s,u=i.map(function(e,t){return function(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(s,!0).forEach(function(e){var t,i,n;t=r,n=s[i=e],i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):f(s).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}({},e,{index:t,ratio:function(e,t){return v(e/t)}(e.width,e.height)})}),o=_.find_path(function(e){var t,i,n,r,s,a,o={};o[e=+e]=0;for(var c=e+1;c<u.length+1&&!(g<c-e);++c)o[""+c]=(t=e,i=c,n=d,r=h,s=l,void 0,a=b(u.slice(t,i),n,s),Math.pow(Math.abs(a-r),2));return o},"0",u.length),c=[],m=[],p=0;p<o.length;p++)o[p+1]&&function(){var e=u.slice(+o[p],+o[p+1]),n=b(e,d,l);e.forEach(function(e){var t,i;e.scaledWidth=(t=n,i=e.ratio,v(t*i)),e.scaledHeight=n,e.scaledWidthPc=v(e.scaledWidth/d*100),m.push(e)}),c.push(e)}();return a?c:m}function o(i){var n=i.target||i.srcElement;n.__resizeRAF__&&cancelAnimationFrame(n.__resizeRAF__),n.__resizeRAF__=requestAnimationFrame(function(){var t=n.__resizeTrigger__,e=t&&t.__resizeListeners__;e&&e.forEach(function(e){e.call(t,i)})})}m.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return 0<this.content.length&&(this.content[0]=t,this.sinkDown(0)),e},remove:function(e){for(var t=this.content.length,i=0;i<t;i++)if(this.content[i]===e){var n=this.content.pop();return void(i!==t-1&&(this.content[i]=n,this.scoreFunction(n)<this.scoreFunction(e)?this.bubbleUp(i):this.sinkDown(i)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(e){for(var t=this.content[e];0<e;){var i=Math.floor((e+1)/2)-1,n=this.content[i];if(!(this.scoreFunction(t)<this.scoreFunction(n)))break;this.content[i]=t,this.content[e]=n,e=i}},sinkDown:function(e){for(var t=this.content.length,i=this.content[e],n=this.scoreFunction(i);;){var r=2*(e+1),s=r-1,a=null;if(s<t){var o=this.content[s],c=this.scoreFunction(o);c<n&&(a=s)}if(r<t){var d=this.content[r];this.scoreFunction(d)<(null===a?n:c)&&(a=r)}if(null==a)break;this.content[e]=this.content[a],this.content[a]=i,e=a}}},void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));function t(e,t){var i,n=this.document,r=n.attachEvent;if("undefined"!=typeof navigator&&(i=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],r)(e.__resizeTrigger__=e).attachEvent("onresize",o);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var s=e.__resizeTrigger__=n.createElement("object");s.setAttribute("style","position: absolute; top: 0; left: 0; height: 100%; width: 100%; pointer-events: none; z-index: -1; opacity: 0;"),s.setAttribute("class","resize-sensor"),s.setAttribute("tabindex","-1"),s.__resizeElement__=e,s.onload=function(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",o)},s.type="text/html",i&&e.appendChild(s),s.data="about:blank",i||e.appendChild(s)}e.__resizeListeners__.push(t)}function n(e,t){var i=document.attachEvent,n=e.__resizeListeners__||[];if(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}else n=e.__resizeListeners__=[];if(!n.length){if(i)e.detachEvent("onresize",o);else if(e.__resizeTrigger__){var s=e.__resizeTrigger__.contentDocument,a=s&&s.defaultView;a&&(a.removeEventListener("resize",o),delete a.__resizeTrigger__),e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)}delete e.__resizeListeners__}}var r="undefined"==typeof window?t:t.bind(window);r.unbind=n;var s={},a={props:{src:String,alt:String,srcset:String},data:function(){return{isLoaded:!1,isVisible:!1,isInstant:!1}},created:function(){s[this.src]&&(this.isLoaded=!0,this.isVisible=!0)},mounted:function(){var t=this;this.isLoaded||(this._observer_disconnect=function(e,a,t){var i=(2<arguments.length&&void 0!==t?t:{}).delay,o=void 0===i?300:i,c=!0,d=0,h=!1,n=new IntersectionObserver(function(e,t){function i(){h||a({isVisibleOnInit:c,entry:e[0]})}var n=e[0],r=n.time,s=n.isIntersecting;s&&(c?(t.disconnect(),i()):setTimeout(function(){d===r&&(t.disconnect(),i())},o)),d=r,c=!1});return n.observe(e),function(){h=!0,n.disconnect()}}(this.$el,function(e){e.isVisibleOnInit;t.isVisible=!0}))},destroyed:function(){this._observer_disconnect&&this._observer_disconnect()},methods:{onLoad:function(){s[this.src]=!0,this.isLoaded=!0}}};var c,d=function(e,t,i,n,r,s,a,o,c,d){"boolean"!=typeof a&&(c=o,o=a,a=!1);var h,l="function"==typeof i?i.options:i;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),n&&(l._scopeId=n),s?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=h):t&&(h=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),h)if(l.functional){var g=l.render;l.render=function(e,t){return h.call(t),g(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,h):[h]}return i},h="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var l={};function g(e){return function(e,t){return function(e,t){var i=h?t.media||"default":e,n=l[i]||(l[i]={ids:new Set,styles:[]});if(!n.ids.has(e)){n.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),void 0===c&&(c=document.head||document.getElementsByTagName("head")[0]),c.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(r),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var s=n.ids.size-1,a=document.createTextNode(r),o=n.element.childNodes;o[s]&&n.element.removeChild(o[s]),o.length?n.element.insertBefore(a,o[s]):n.element.appendChild(a)}}}(e,t)}}function u(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lazy-image-container",class:{"is-loaded":t.isLoaded},attrs:{"data-masonry-image":""}},[t.isVisible?i("img",{staticClass:"lazy-image",class:{"is-loaded":t.isLoaded,"is-instant":t.isInstant},attrs:{src:t.src,alt:t.alt,srcset:t.srcset},on:{load:function(e){return t.onLoad()}}}):t._e()])}function p(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"image-masonry"},n._l(n.scaledImages,function(e,i){return r("div",{key:i,staticClass:"masonry-row",style:{"margin-bottom":n.padding+"px"}},n._l(e,function(t){return r("div",{key:t.src,staticClass:"masonry-item",style:n.makeStyle(t),on:{click:function(e){return n.onClick(t.index,e)}}},[r("lazy-image",{staticClass:"masonry-image",attrs:{src:t.src,alt:t.alt,srcset:t.srcset}}),n._v(" "),n._t("default",null,{image:t,index:i})],2)}),0)}),0)}function y(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("image-masonry",{attrs:{images:this.images}})],1)}var w=a,j=(u._withStripped=!0,d({render:u,staticRenderFns:[]},function(e){e&&e("data-v-480b240c_0",{source:".lazy-image-container[data-v-480b240c] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  display: block;\n}\n.lazy-image[data-v-480b240c] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity 200ms ease-in-out;\n}\n.lazy-image.is-loaded[data-v-480b240c] {\r\n  opacity: 1;\n}\n.lazy-image.is-instant[data-v-480b240c] {\r\n  opacity: 1;\r\n  transition: none;\n}\r\n",map:void 0,media:void 0})},w,"data-v-480b240c",!(u._withStripped=!0),void 0,g,void 0)),z={props:{images:{type:Array,required:!0,default:[]},targetRowHeight:{type:Number,default:220},padding:{type:Number,default:4}},data:function(){return{scaledImages:[],width:0}},components:{lazyImage:j},methods:{makeStyle:function(e){var t=e.scaledHeight;return{width:e.scaledWidth+"px",height:t+"px","margin-right":this.padding+"px"}},onClick:function(e,t){this.$emit("image-click",this.images[e],e,t)}},mounted:function(){function e(){t.width=t.$el.getBoundingClientRect().width,t.scaledImages=i({images:t.images,containerWidth:t.width,targetHeight:t.targetRowHeight,padding:t.padding})}var t=this;r(this.$el,function(){Math.round(t.width)!==Math.round(t.$el.getBoundingClientRect().width)&&e()}),this.$watch("images",function(){e()},{immediate:!0,deep:!0}),this.$watch("targetRowHeight",e)},beforeDestroy:function(){n(this.$el)}},E=(p._withStripped=!0,{data:function(){return{images:e}},components:{imageMasonry:d({render:p,staticRenderFns:[]},function(e){e&&e("data-v-b2126824_0",{source:".masonry-row[data-v-b2126824] {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: nowrap;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  width: 100%;\n}\n.masonry-row[data-v-b2126824]:last-child {\r\n  margin-right: 0 !important;\n}\n.masonry-item[data-v-b2126824] {\r\n  position: relative;\n}\n.masonry-item[data-v-b2126824]:last-child {\r\n  margin-right: 0 !important;\r\n  flex: 1;\n}\n.masonry-image[data-v-b2126824] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\n}\n.lazy-image-container[data-v-b2126824] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  display: block;\n}\n.lazy-image[data-v-b2126824] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity 200ms ease-in-out;\n}\n.lazy-image.is-loaded[data-v-b2126824] {\r\n  opacity: 1;\n}\r\n\r\n",map:void 0,media:void 0})},z,"data-v-b2126824",!(p._withStripped=!0),void 0,g,void 0)}});y._withStripped=!0;return d({render:y,staticRenderFns:[]},void 0,E,void 0,!(y._withStripped=!0),void 0,void 0,void 0)});
//# sourceMappingURL=image-masonry-vue.js.map
