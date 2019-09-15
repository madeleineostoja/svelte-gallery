import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

const cssPath = './photoswipe';

export default function(images, index, thumbData) {
  const imgs = images.map(image => {
    return {
      ...image,
      w: image.w || image.width,
      h: image.h || image.height
    };
  });

  const gallery = new PhotoSwipe(document.querySelector('.pswp'), PhotoSwipeUI_Default, imgs, {
    history: false,
    closeOnScroll: false,
    index: +index,
    mainClass: 'pswp--minimal--dark',
    shareEl: false,
    bgOpacity: 0.9,
    getThumbBoundsFn: index => {
      if (!thumbData) {
        return;
      }
      const thumbnail = thumbData.container.querySelectorAll(thumbData.selector)[index];
      const pageYScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnail.getBoundingClientRect();
      return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
    }
  });
  gallery.init();

  return gallery;
}

const template = `
<style>
  @import url("${cssPath}/photoswipe.css");
  @import url("${cssPath}/default-skin/default-skin.css");
  .pswp__caption .pswp__caption__center {
    font-size: 1rem;
  }

  .pswp__ui--fit .pswp__caption {
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
  <!-- Background of PhotoSwipe.
  It's a separate element as animating opacity is faster than rgba().-->
  <div class="pswp__bg"></div>

  <!-- Slides wrapper with overflow:hidden. -->
  <div class="pswp__scroll-wrap">
    <!-- Container that holds slides.
          PhotoSwipe keeps only 3 of them in the DOM to save memory.
    Don't modify these 3 pswp__item elements, data is added later on.-->
    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>

    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
    <div class="pswp__ui pswp__ui--hidden">
      <div class="pswp__top-bar">
        <!--  Controls are self-explanatory. Order can be changed. -->

        <div class="pswp__counter"></div>

        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

        <button class="pswp__button pswp__button--share" title="Share"></button>

        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

        <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
        <!-- element will get class pswp__preloader--active when preloader is running -->
        <div class="pswp__preloader">
          <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
              <div class="pswp__preloader__donut"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
        <div class="pswp__share-tooltip"></div>
      </div>

      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

      <div class="pswp__caption">
        <div class="pswp__caption__center"></div>
      </div>
    </div>
  </div>
</div>
`
document.body.insertAdjacentHTML('beforeend', template);
