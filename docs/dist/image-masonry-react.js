!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-dom"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","react-dom","prop-types"],t):(e=e||self).ImageMasonryExample=t(e.React,e.ReactDOM,e.PropTypes)}(this,function(v,s,e){"use strict";var t="default"in v?v.default:v;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=function(){if("undefined"!=typeof Map)return Map;function r(e,n){var r=-1;return e.some(function(e,t){return e[0]===n&&(r=t,!0)}),r}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var t=r(this.__entries__,e),n=this.__entries__[t];return n&&n[1]},e.prototype.set=function(e,t){var n=r(this.__entries__,e);~n?this.__entries__[n][1]=t:this.__entries__.push([e,t])},e.prototype.delete=function(e){var t=this.__entries__,n=r(t,e);~n&&t.splice(n,1)},e.prototype.has=function(e){return!!~r(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},e;function e(){this.__entries__=[]}}(),n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),c="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},u=2;var o=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,l=(h.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},h.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},h.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},h.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),0<e.length},h.prototype.connect_=function(){n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},h.prototype.disconnect_=function(){n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},h.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;o.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},h.getInstance=function(){return this.instance_||(this.instance_=new h),this.instance_},h.instance_=null,h);function h(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function a(){c(o)}function s(){var e=Date.now();if(n){if(e-i<u)return;r=!0}else r=!(n=!0),setTimeout(a,t);i=e}return s}(this.refresh.bind(this),20)}var f=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},p=j(0,0,0,0);function g(e){return parseFloat(e)||0}function _(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.reduce(function(e,t){return e+g(n["border-"+t+"-width"])},0)}function w(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=g(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=g(r.width),c=g(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=_(r,"left","right")+o),Math.round(c+a)!==n&&(c-=_(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var u=Math.round(s+o)-t,l=Math.round(c+a)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(l)&&(c-=l)}return j(i.left,i.top,s,c)}var O="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function E(e){return n?O(e)?function(e){var t=e.getBBox();return j(0,0,t.width,t.height)}(e):w(e):p}function j(e,t,n,r){return{x:e,y:t,width:n,height:r}}var R=(M.prototype.isActive=function(){var e=E(this.target);return(this.contentRect_=e).width!==this.broadcastWidth||e.height!==this.broadcastHeight},M.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},M);function M(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=j(0,0,0,0),this.target=e}var T=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return f(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}(t);f(this,{target:e,contentRect:n})},x=(S.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new R(e)),this.controller_.addObserver(this),this.controller_.refresh())}},S.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},S.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},S.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},S.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new T(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},S.prototype.clearActive=function(){this.activeObservations_.splice(0)},S.prototype.hasActive=function(){return 0<this.activeObservations_.length},S);function S(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}var z="undefined"!=typeof WeakMap?new WeakMap:new r,k=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),r=new x(t,n,this);z.set(this,r)};["observe","unobserve","disconnect"].forEach(function(t){k.prototype[t]=function(){var e;return(e=z.get(this))[t].apply(e,arguments)}});var P=void 0!==i.ResizeObserver?i.ResizeObserver:k;function A(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var H="object"==typeof global&&global&&global.Object===Object&&global,D="object"==typeof self&&self&&self.Object===Object&&self,C=H||D||Function("return this")(),W=function(){return C.Date.now()},N=C.Symbol,F=Object.prototype,L=F.hasOwnProperty,q=F.toString,I=N?N.toStringTag:void 0;var U=Object.prototype.toString;var B="[object Null]",V="[object Undefined]",G=N?N.toStringTag:void 0;function K(e){return null==e?void 0===e?V:B:G&&G in Object(e)?function(e){var t=L.call(e,I),n=e[I];try{var r=!(e[I]=void 0)}catch(e){}var i=q.call(e);return r&&(t?e[I]=n:delete e[I]),i}(e):function(e){return U.call(e)}(e)}var $="[object Symbol]";var Y=NaN,J=/^\s+|\s+$/g,Z=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,X=/^0o[0-7]+$/i,ee=parseInt;function te(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&K(e)==$}(e))return Y;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(J,"");var n=Q.test(e);return n||X.test(e)?ee(e.slice(2),n?2:8):Z.test(e)?Y:+e}var ne="Expected a function",re=Math.max,ie=Math.min;function oe(r,n,e){var i,o,a,s,c,u,l=0,h=!1,f=!1,t=!0;if("function"!=typeof r)throw new TypeError(ne);function d(e){var t=i,n=o;return i=o=void 0,l=e,s=r.apply(n,t)}function p(e){var t=e-u;return void 0===u||n<=t||t<0||f&&a<=e-l}function m(){var e=W();if(p(e))return g(e);c=setTimeout(m,function(e){var t=n-(e-u);return f?ie(t,a-(e-l)):t}(e))}function g(e){return c=void 0,t&&i?d(e):(i=o=void 0,s)}function v(){var e=W(),t=p(e);if(i=arguments,o=this,u=e,t){if(void 0===c)return function(e){return l=e,c=setTimeout(m,n),h?d(e):s}(u);if(f)return clearTimeout(c),c=setTimeout(m,n),d(u)}return void 0===c&&(c=setTimeout(m,n)),s}return n=te(n)||0,A(e)&&(h=!!e.leading,a=(f="maxWait"in e)?re(te(e.maxWait)||0,n):a,t="trailing"in e?!!e.trailing:t),v.cancel=function(){void 0!==c&&clearTimeout(c),i=u=o=c=void(l=0)},v.flush=function(){return void 0===c?s:g(W())},v}function ae(e){return"function"==typeof e}function se(){return"undefined"==typeof window}var ce={debounce:oe,throttle:function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return A(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),oe(e,t,{leading:r,maxWait:t,trailing:i})}};function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var pe=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),he(this,fe(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(e,v.PureComponent),function(e,t,n){t&&le(e.prototype,t),n&&le(e,n)}(e,[{key:"render",value:function(){return this.props.children}}]),e}();function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we=function(){function a(e){var l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),_e(ye(l=function(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?ye(e):t}(this,ve(a).call(this,e))),"cancelHandler",function(){l.resizeHandler&&l.resizeHandler.cancel&&(l.resizeHandler.cancel(),l.resizeHandler=null)}),_e(ye(l),"rafClean",function(){l.raf&&l.raf.cancel&&(l.raf.cancel(),l.raf=null)}),_e(ye(l),"toggleObserver",function(e){var t=l.getElement();t&&l.resizeObserver[e]&&l.resizeObserver[e](t)}),_e(ye(l),"getElement",function(){var e=l.props,t=e.querySelector,n=e.targetDomEl;if(!se()){if(t)return document.querySelector(t);if(n&&function(e){return e instanceof Element||e instanceof HTMLDocument}(n))return n;var r=l.element&&s.findDOMNode(l.element);if(r)return r.parentElement}}),_e(ye(l),"createUpdater",function(){return l.rafClean(),l.raf=function(r){function e(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i=t,o=o||requestAnimationFrame(function(){o=null,r.apply(void 0,i)})}var i=[],o=null;return e.cancel=function(){o&&(cancelAnimationFrame(o),o=null)},e}(function(e){var t=e.width,n=e.height,r=l.props.onResize;ae(r)&&r(t,n),l.setState({width:t,height:n})}),l.raf}),_e(ye(l),"createResizeHandler",function(e){var t=l.state,o=t.width,a=t.height,n=l.props,s=n.handleWidth,c=n.handleHeight;if(s||c){var u=l.createUpdater();e.forEach(function(e){var t=e&&e.contentRect||{},n=t.width,r=t.height,i=s&&o!==n||c&&a!==r;l.skipOnMount||!i||se()||u({width:n,height:r}),l.skipOnMount=!1})}}),_e(ye(l),"onRef",function(e){l.element=e}),_e(ye(l),"getRenderType",function(){var e=l.props,t=e.render,n=e.children;return ae(t)?"renderProp":ae(n)?"childFunction":v.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"}),_e(ye(l),"getTargetComponent",function(){var e=l.props,t=e.render,n=e.children,r=e.nodeType,i=l.state,o={width:i.width,height:i.height};switch(l.getRenderType()){case"renderProp":return v.cloneElement(t(o),{key:"resize-detector"});case"childFunction":return v.cloneElement(n(o));case"child":return v.cloneElement(n,o);case"childArray":return n.map(function(e){return!!e&&v.cloneElement(e,o)});default:return v.createElement(r)}});var t=e.skipOnMount,n=e.refreshMode,r=e.refreshRate,i=e.refreshOptions;l.state={width:void 0,height:void 0},l.skipOnMount=t,l.raf=null,l.element=null,l.unmounted=!1;var o=function(e){return ce[e]}(n);return l.resizeHandler=o?o(l.createResizeHandler,r,i):l.createResizeHandler,l.resizeObserver=new P(l.resizeHandler),l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(a,v.PureComponent),function(e,t,n){t&&ge(e.prototype,t),n&&ge(e,n)}(a,[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return t.createElement(pe,{ref:this.onRef},this.getTargetComponent())}}]),a}();we.propTypes={handleWidth:e.bool,handleHeight:e.bool,skipOnMount:e.bool,refreshRate:e.number,refreshMode:e.string,refreshOptions:e.shape({leading:e.bool,trailing:e.bool}),querySelector:e.string,targetDomEl:e.any,onResize:e.func,render:e.func,children:e.any,nodeType:e.node},we.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};var Oe={"image-masonry":"style_image-masonry__2Y725","is-resizing":"style_is-resizing__3cjR7","image-masonry-container":"style_image-masonry-container__2ZawK","masonry-item":"style_masonry-item__19R2g","masonry-image":"style_masonry-image__2OKgh","lazy-image-container":"style_lazy-image-container__IJ3s0","lazy-image":"style_lazy-image__1EUsb","is-loaded":"style_is-loaded__2qRRm"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".style_image-masonry__2Y725 {\r\n  max-width: 100%;\r\n}\r\n\r\n.style_image-masonry__2Y725.style_is-resizing__3cjR7 {\r\n  overflow: hidden;\r\n}\r\n\r\n.style_image-masonry-container__2ZawK {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.style_masonry-item__19R2g {\r\n  position: relative;\r\n}\r\n\r\n.style_masonry-image__2OKgh {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.style_lazy-image-container__IJ3s0 {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  display: block;\r\n}\r\n\r\n.style_lazy-image__1EUsb {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity 200ms ease-in-out;\r\n}\r\n\r\n.style_lazy-image__1EUsb.style_is-loaded__2qRRm {\r\n  opacity: 1;\r\n}\r\n");var Ee={};function je(e){var t=e.src,n=e.srcset,r=e.alt,i=v.useRef(null),o=b(v.useState(!1),2),a=o[0],s=o[1],c=b(v.useState(!1),2),u=c[0],l=c[1];v.useEffect(function(){if(Ee[t])return s(!0),void l(!0);var e=function(e,a,t){var n=(2<arguments.length&&void 0!==t?t:{}).delay,s=void 0===n?300:n,c=!0,u=0,l=null,r=new IntersectionObserver(function(e,t){function n(){a({isVisibleOnInit:c,entry:e[0]})}var r=e[0],i=r.time,o=r.isIntersecting;o&&(c?(t.disconnect(),n()):l=setTimeout(function(){u===i&&(t.disconnect(),n())},s)),u=i,c=!1});return r.observe(e),function(){clearTimeout(l),r.disconnect()}}(i.current,function(){s(!0)});return function(){e()}},[t,n]);var h=null;if(a){var f=Oe["lazy-image"]+" "+(u?Oe["is-loaded"]:"");h=React.createElement("img",{src:t,srcSet:n,alt:r,className:f,onLoad:function(){Ee[t]=!0,l(!0)}})}return React.createElement("div",{"data-masonry-image":!0,ref:i,className:Oe["lazy-image-container"]},h)}function Re(e){var t=e.image,n=e.padding,r=e.render,i=e.onClick,o=e.emitter,a=t.scaledWidth,s=t.scaledHeight,c=t.isLastInRow,u=t.isLastRow,l=t.index,h=n+"px",f=u?"0":h,d="0 0 ".concat(a,"px");c&&(h="0",d="1 1 ".concat(a-4,"px"));var p={height:s+"px",flex:d,marginRight:h,marginBottom:f};return React.createElement("div",{style:p,onClick:function(e){i(l,e)},value:t.index,className:Oe["masonry-item"]},React.createElement(je,m({},t,{emitter:o})),r&&r(t))}var Me={single_source_shortest_paths:function(e,t,n){var r={},i={};i[t]=0;var o,a,s,c,u,l,h=new Te(function(e){return e.cost});for(h.push({value:t,cost:0});h.size();)for(var f in a=(o=h.pop()).value,s=o.cost,c=e(a)||{})u=s+c[f],l=i[f],(void 0===i[f]||u<l)&&(i[f]=u,h.push({value:f,cost:u}),r[f]=a);if(void 0!==i[n])return r;var d=["Could not find a path from ",t," to ",n,"."].join("");throw new Error(d)},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,n){var r=Me.single_source_shortest_paths(e,t,n);return Me.extract_shortest_path_from_predecessor_list(r,n)}};function Te(e){this.content=[],this.scoreFunction=e}function xe(e){return Math.round(100*e+Number.EPSILON)/100}function Se(e,t){return xe(e/t)}function ze(e,t,n){return function(e,t){return xe(e/t)}(t-(e.length-1)*n,e.reduce(function(e,t){return e+t.ratio},0))}function ke(e,t){if(e<420)return 2;var n=Se(e,t)/.75;return Math.round(1.5*n)}function Pe(e){for(var t=0<arguments.length&&void 0!==e?e:{},n=t.images,u=t.containerWidth,l=t.targetHeight,r=t.padding,h=void 0===r?2:r,i=t.seekLimit,o=void 0===i?ke:i,a=t.byRow,s=void 0!==a&&a,f=n.map(function(e,t){return function(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?y(o,!0).forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):y(o).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}({},e,{index:t,ratio:Se(e.width,e.height)})}),d=o(u,l),c=Me.find_path(function(e){var t,n,r,i,o,a,s={};s[e=+e]=0;for(var c=e+1;c<f.length+1&&!(d<c-e);++c)s[""+c]=(t=e,n=c,r=u,i=l,o=h,void 0,a=ze(f.slice(t,n),r,o),Math.pow(Math.abs(a-i),2));return s},"0",f.length),p=[],m=[],g=0;g<c.length;g++)c[g+1]&&function(){var i=f.slice(+c[g],+c[g+1]),o=g===c.length-2,a=ze(i,u,h);i.forEach(function(e,t){var n,r;e.scaledWidth=(n=a,r=e.ratio,xe(n*r)),e.scaledHeight=a,e.scaledWidthPc=xe(e.scaledWidth/u*100),t===i.length-1&&(e.isLastInRow=!0),e.isLastRow=o,m.push(e)}),p.push(i)}();return s?p:m}function Ae(e){function t(e,t){i&&i(n[e],e,t)}var n=e.images,r=e.targetRowHeight,i=e.onImageClick,o=e.padding,a=e.render,s=v.useRef(null),c=b(v.useState(!1),2),u=c[0],l=c[1],h=b(v.useState({images:[],width:0}),2),f=h[0],d=h[1],p={width:f.width+"px"},m=u?Oe["is-resizing"]:"",g=function(n,r){var i=null;return function(){clearTimeout(i);var e=arguments,t=this;i=setTimeout(function(){n.apply(t,e)},r)}}(function(){l(!1)},100);return v.useEffect(function(){var e=s.current.getBoundingClientRect().width;d({images:Pe({images:n,containerWidth:e,targetHeight:r,padding:o}),width:e})},[n,r]),React.createElement("div",{className:Oe["image-masonry"]+" "+m,ref:s},React.createElement(we,{handleWidth:!0,skipOnMount:!0,onResize:function(e){Math.round(e)!==Math.round(f.width)&&(l(!0),d({images:Pe({images:n,containerWidth:e,targetHeight:r,padding:o}),width:e}),g())}}),React.createElement("div",{className:Oe["image-masonry-container"],style:p},f.images.map(function(e){return React.createElement(Re,{key:e.src,image:e,onClick:t,padding:o,render:a})})))}Te.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return 0<this.content.length&&(this.content[0]=t,this.sinkDown(0)),e},remove:function(e){for(var t=this.content.length,n=0;n<t;n++)if(this.content[n]===e){var r=this.content.pop();return void(n!==t-1&&(this.content[n]=r,this.scoreFunction(r)<this.scoreFunction(e)?this.bubbleUp(n):this.sinkDown(n)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(e){for(var t=this.content[e];0<e;){var n=Math.floor((e+1)/2)-1,r=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(r)))break;this.content[n]=t,this.content[e]=r,e=n}},sinkDown:function(e){for(var t=this.content.length,n=this.content[e],r=this.scoreFunction(n);;){var i=2*(e+1),o=i-1,a=null;if(o<t){var s=this.content[o],c=this.scoreFunction(s);c<r&&(a=o)}if(i<t){var u=this.content[i];this.scoreFunction(u)<(null===a?r:c)&&(a=i)}if(null==a)break;this.content[e]=this.content[a],this.content[a]=n,e=a}}},void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),Ae.defaultProps={images:[],targetRowHeight:220,padding:4};var He=[{src:"images/a-small.jpg",width:400,height:300},{src:"images/b-small.jpg",width:400,height:300},{src:"images/c-small.jpg",width:300,height:400},{src:"images/d-small.jpg",width:300,height:400},{src:"images/e-small.jpg",width:300,height:400},{src:"images/f-small.jpg",width:400,height:300},{src:"images/g-small.jpg",width:400,height:300},{src:"images/h-small.jpg",width:300,height:400},{src:"images/i-small.jpg",width:300,height:400},{src:"images/j-small.jpg",width:833,height:250},{src:"images/k-small.jpg",width:400,height:300},{src:"images/l-small.jpg",width:300,height:400},{src:"images/m-small.jpg",width:400,height:300},{src:"images/n-small.jpg",width:400,height:300},{src:"images/o-small.jpg",width:400,height:300},{src:"images/p-small.jpg",width:300,height:400},{src:"images/q-small.jpg",width:400,height:300},{src:"images/r-small.jpg",width:400,height:300},{src:"images/s-small.jpg",width:400,height:200},{src:"images/t-small.jpg",width:400,height:300},{src:"images/u-small.jpg",width:400,height:300},{src:"images/v-small.jpg",width:400,height:300},{src:"images/w-small.jpg",width:300,height:400},{src:"images/x-small.jpg",width:833,height:250},{src:"images/y-small.jpg",width:400,height:300},{src:"images/z-small.jpg",width:300,height:400},{src:"images/zz-small.jpg",width:400,height:300}];return function(){return React.createElement("div",null,React.createElement(Ae,{images:He}))}});
//# sourceMappingURL=image-masonry-react.js.map
