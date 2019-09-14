!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).ImageMasonryExample=e()}(this,(function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function l(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function d(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let g;function f(t){g=t}function p(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}function m(){const t=g;return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,i)})}}}const _=[],w=[],x=[],v=[],$=Promise.resolve();let b=!1;function y(t){x.push(t)}function E(){const t=new Set;do{for(;_.length;){const t=_.shift();f(t),z(t.$$)}for(;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];t.has(n)||(n(),t.add(n))}x.length=0}while(_.length);for(;v.length;)v.pop()();b=!1}function z(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(y))}const R=new Set;let k,C;function H(t,e){t&&t.i&&(R.delete(t),t.i(e))}function T(t,n,o){const{fragment:r,on_mount:c,on_destroy:h,after_update:a}=t.$$;r.m(n,o),y(()=>{const n=c.map(e).filter(i);h?h.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(y)}function L(t,e){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function A(t,e){t.$$.dirty||(_.push(t),b||(b=!0,$.then(E)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function F(e,i,o,r,c,h){const a=g;f(e);const u=i.props||{},l=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:null};let d=!1;l.ctx=o?o(e,u,(t,n,s=n)=>(l.ctx&&c(l.ctx[t],l.ctx[t]=s)&&(l.bound[t]&&l.bound[t](s),d&&A(e,t)),n)):u,l.update(),d=!0,s(l.before_update),l.fragment=r(l.ctx),i.target&&(i.hydrate?l.fragment.l(function(t){return Array.from(t.childNodes)}(i.target)):l.fragment.c(),i.intro&&H(e.$$.fragment),T(e,i.target,i.anchor),E()),f(a)}"undefined"!=typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class M{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const I={single_source_shortest_paths:function(t,e,n){var s={},i={};i[e]=0;var o,r,c,h,a,u,l=new W((function(t){return t.cost}));for(l.push({value:e,cost:0});l.size();)for(var d in r=(o=l.pop()).value,c=o.cost,h=t(r)||{})a=c+h[d],u=i[d],(void 0===i[d]||u>a)&&(i[d]=a,l.push({value:d,cost:a}),s[d]=r);if(void 0===i[n]){var g=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(g)}return s},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],s=e;s;)n.push(s),t[s],s=t[s];return n.reverse(),n},find_path:function(t,e,n){var s=I.single_source_shortest_paths(t,e,n);return I.extract_shortest_path_from_predecessor_list(s,n)}};function W(t){this.content=[],this.scoreFunction=t}function D(t,e){return e/t}function V(t,e){return t/e}function P(t,e,n){return function(t,e){return t*e}(e,D(t.reduce((t,{scaledWidth:e})=>t+e,0),n))}function U(t,e,n,s,i){const o=P(t.slice(e,n),s,i);return Math.pow(Math.abs(o-i),2)}function O(t){var e=t.target||t.srcElement;e.__resizeRAF__&&cancelAnimationFrame(e.__resizeRAF__),e.__resizeRAF__=requestAnimationFrame((function(){var n=e.__resizeTrigger__,s=n&&n.__resizeListeners__;s&&s.forEach((function(e){e.call(n,t)}))}))}W.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]===t){var s=this.content.pop();return void(n!==e-1&&(this.content[n]=s,this.scoreFunction(s)<this.scoreFunction(t)?this.bubbleUp(n):this.sinkDown(n)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t];t>0;){var n=Math.floor((t+1)/2)-1,s=this.content[n];if(!(this.scoreFunction(e)<this.scoreFunction(s)))break;this.content[n]=e,this.content[t]=s,t=n}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],s=this.scoreFunction(n);;){var i=2*(t+1),o=i-1,r=null;if(o<e){var c=this.content[o],h=this.scoreFunction(c);h<s&&(r=o)}if(i<e){var a=this.content[i];this.scoreFunction(a)<(null===r?s:h)&&(r=i)}if(null==r)break;this.content[t]=this.content[r],this.content[r]=n,t=r}}};var S=function(t,e){var n,s=this.document,i=s.attachEvent;if("undefined"!=typeof navigator&&(n=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!t.__resizeListeners__)if(t.__resizeListeners__=[],i)t.__resizeTrigger__=t,t.attachEvent("onresize",O);else{"static"===getComputedStyle(t).position&&(t.style.position="relative");var o=t.__resizeTrigger__=s.createElement("object");o.setAttribute("style","position: absolute; top: 0; left: 0; height: 100%; width: 100%; pointer-events: none; z-index: -1; opacity: 0;"),o.setAttribute("class","resize-sensor"),o.setAttribute("tabindex","-1"),o.__resizeElement__=t,o.onload=function(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",O)},o.type="text/html",n&&t.appendChild(o),o.data="about:blank",n||t.appendChild(o)}t.__resizeListeners__.push(e)},B="undefined"==typeof window?S:S.bind(window),Z=function(t,e){var n=document.attachEvent,s=t.__resizeListeners__||[];if(e){var i=s.indexOf(e);-1!==i&&s.splice(i,1)}else s=t.__resizeListeners__=[];if(!s.length){if(n)t.detachEvent("onresize",O);else if(t.__resizeTrigger__){var o=t.__resizeTrigger__.contentDocument,r=o&&o.defaultView;r&&(r.removeEventListener("resize",O),delete r.__resizeTrigger__),t.__resizeTrigger__=!t.removeChild(t.__resizeTrigger__)}delete t.__resizeListeners__}};function j(t,e,n){const s=Object.create(t);return s.image=e[n],s.index=n,s}function G(t){var e,n,s,i,o,g,f;function p(){return t.click_handler(t)}return{c(){e=a("div"),n=a("img"),o=u(),d(n,"src",s=t.image.src),d(n,"alt",i=t.image.alt),d(n,"class","svelte-16ixl9o"),d(e,"class","image-masonry-item svelte-16ixl9o"),d(e,"style",g=q(t.image)),f=l(e,"click",p)},m(t,s){c(t,e,s),r(e,n),r(e,o)},p(o,r){t=r,o.scaledImages&&s!==(s=t.image.src)&&d(n,"src",s),o.scaledImages&&i!==(i=t.image.alt)&&d(n,"alt",i),o.scaledImages&&g!==(g=q(t.image))&&d(e,"style",g)},d(t){t&&h(e),f()}}}function N(e){var n;let s=e.scaledImages,i=[];for(let t=0;t<s.length;t+=1)i[t]=G(j(e,s,t));return{c(){n=a("div");for(let t=0;t<i.length;t+=1)i[t].c();d(n,"class","image-masonry svelte-16ixl9o")},m(t,s){c(t,n,s);for(let t=0;t<i.length;t+=1)i[t].m(n,null);e.div_binding(n)},p(t,e){if(t.makeStyle||t.scaledImages){let o;for(s=e.scaledImages,o=0;o<s.length;o+=1){const r=j(e,s,o);i[o]?i[o].p(t,r):(i[o]=G(r),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}},i:t,o:t,d(t){t&&h(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t),e.div_binding(null)}}}function q({scaledWidthPc:t,scaledHeight:e}){return`width:${t}%; height:${e}px`}function Q(t,e,n){function s(t){i("image-click",c[t])}const i=m();let o,r,{images:c=[],targetRowHeight:h=200}=e,a=[];p(()=>(n("width",r=o.getBoundingClientRect().width),B(o,()=>{Math.round(r)!==Math.round(o.getBoundingClientRect().width)&&n("width",r=o.getBoundingClientRect().width)}),()=>Z(o)));return t.$set=t=>{"images"in t&&n("images",c=t.images),"targetRowHeight"in t&&n("targetRowHeight",h=t.targetRowHeight)},t.$$.update=(t={width:1,images:1,targetRowHeight:1})=>{(t.width||t.images||t.targetRowHeight)&&r&&n("scaledImages",a=function(t,e,n,s=8,i=!1){const o=t.map(t=>{const e=D(t.width,t.height);return{...t,ratio:e,scaledWidth:V(n,e),scaledHeight:n,scaledWidthPc:0}}),r=I.find_path(t=>{const i={};i[t=+t]=0;for(let r=t+1;r<o.length+1&&!(r-t>s);++r)i[""+r]=U(o,t,r,e,n);return i},"0",o.length),c=[],h=[];for(let t=0;t<r.length;t++)if(r[t+1]){const s=o.slice(+r[t],+r[t+1]),i=P(s,e,n);s.forEach(t=>{t.scaledWidth=V(i,t.ratio),t.scaledHeight=i,t.scaledWidthPc=t.scaledWidth/e*100,h.push(t)}),c.push(s)}return i?c:h}(c,r,h))},{onClick:s,images:c,targetRowHeight:h,element:o,scaledImages:a,click_handler:({index:t})=>s(t),div_binding:function(t){w[t?"unshift":"push"](()=>{n("element",o=t)})}}}B.unbind=Z;class Y extends M{constructor(t){var e;super(),document.getElementById("svelte-16ixl9o-style")||((e=a("style")).id="svelte-16ixl9o-style",e.textContent=".image-masonry.svelte-16ixl9o{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.image-masonry-item.svelte-16ixl9o{box-sizing:border-box;padding:1px\r\n}.image-masonry-item.svelte-16ixl9o img.svelte-16ixl9o{display:block;width:100%;height:100%}",r(document.head,e)),F(this,t,Q,N,o,["images","targetRowHeight"])}}var J=[{src:"https://source.unsplash.com/V6TWE6h8gyg/800x600",width:800,height:600},{src:"https://source.unsplash.com/dtaPArYUDg4/800x600",width:800,height:600},{src:"https://source.unsplash.com/R_kik2MoltU/600x799",width:600,height:799},{src:"https://source.unsplash.com/8LPgWfHgcMg/600x799",width:600,height:799},{src:"https://source.unsplash.com/mC_puQe4V3g/600x800",width:600,height:800},{src:"https://source.unsplash.com/_LuLiJc1cdo/800x600",width:800,height:600},{src:"https://source.unsplash.com/v7daTKlZzaw/800x599",width:800,height:599},{src:"https://source.unsplash.com/s7qZayMy6Go/600x799",width:600,height:799},{src:"https://source.unsplash.com/rB-4G58XFt0/600x800",width:600,height:800},{src:"https://source.unsplash.com/fg6g2u5oklo/1000x300",width:1e3,height:400},{src:"https://source.unsplash.com/eVwzKfnEGDg/800x600",width:800,height:600},{src:"https://source.unsplash.com/F_eLtGyrlNY/600x800",width:600,height:800},{src:"https://source.unsplash.com/9270-pFGVTU/800x600",width:800,height:600},{src:"https://source.unsplash.com/R4y_E5ZQDPg/800x599",width:800,height:599},{src:"https://source.unsplash.com/-QTa5xYxDCs/800x599",width:800,height:599},{src:"https://source.unsplash.com/Sfs_64L9UHE/600x800",width:600,height:800},{src:"https://source.unsplash.com/pR166OP_l6g/800x600",width:800,height:600},{src:"https://source.unsplash.com/hlvtJ4JkVfc/800x600",width:800,height:600},{src:"https://source.unsplash.com/AUYr7ptqSRQ/800x400",width:800,height:400},{src:"https://source.unsplash.com/E7PlRr9ZfoM/800x600",width:800,height:600},{src:"https://source.unsplash.com/GhlotfzelR4/800x600",width:800,height:600},{src:"https://source.unsplash.com/Xvlc79bu9MA/800x600",width:800,height:600},{src:"https://source.unsplash.com/txRO7-0I8wU/600x800",width:600,height:800},{src:"https://source.unsplash.com/e2uTOpgW5Ec/1000x300",width:1e3,height:300},{src:"https://source.unsplash.com/5BsNkTMbZZ0/800x600",width:800,height:600},{src:"https://source.unsplash.com/_31y-mxvRWI/600x800",width:600,height:800},{src:"https://source.unsplash.com/VrrZAVkzfWE/800x600",width:800,height:600}];function K(t){var e,n,i,o,r,g,f=new Y({props:{images:t.images,targetRowHeight:t.targetRowHeight}});return f.$on("image-click",X),{c(){(e=a("button")).textContent="Change images",n=u(),(i=a("button")).textContent="Change row height",o=u(),f.$$.fragment.c(),d(e,"type","button"),d(i,"type","button"),g=[l(e,"click",t.onChangeImages),l(i,"click",t.onChangeRowHeight)]},m(t,s){c(t,e,s),c(t,n,s),c(t,i,s),c(t,o,s),T(f,t,s),r=!0},p(t,e){var n={};t.images&&(n.images=e.images),t.targetRowHeight&&(n.targetRowHeight=e.targetRowHeight),f.$set(n)},i(t){r||(H(f.$$.fragment,t),r=!0)},o(t){!function(t,e,n,s){if(t&&t.o){if(R.has(t))return;R.add(t),k.c.push(()=>{R.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}(f.$$.fragment,t),r=!1},d(t){t&&(h(e),h(n),h(i),h(o)),L(f,t),s(g)}}}function X(t){console.log(t)}function tt(t,e,n){let s=J,i=200;return{images:s,targetRowHeight:i,onChangeImages:function(){const t=[...J];!function(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}}(t),n("images",s=t)},onChangeRowHeight:function(){n("targetRowHeight",i+=20)}}}return new class extends M{constructor(t){super(),F(this,t,tt,K,o,[])}}({target:document.querySelector("#app")})}));
//# sourceMappingURL=image-masonry-svelte.js.map