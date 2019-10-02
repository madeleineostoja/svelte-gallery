<script>
  import ImageMasonry from '../../../src/svelte/ImageMasonry.svelte';
  import sampleImages from '../images-advanced';
  import openPhotoSwipe from '../../photoswipe/index';

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function onClick(event) {
    // create array compatible with PhotoSwipe
    const imgs = images.map(({ src, width, height, original, title }) => {
      return {
        src: original,
        msrc: src,
        w: width,
        h: height,
        title
      }
    });
    openPhotoSwipe(imgs, event.detail.index, (index) => {
      return element.querySelectorAll('[data-masonry-image]')[index];
    });
  }

  let element;
  let images = sampleImages;
  let targetRowHeight = 220;

  function onChangeImages() {
    const newArray = [...sampleImages];
    shuffleArray(newArray);
    images = newArray;
  }

  function onChangeRowHeight() {
    targetRowHeight = targetRowHeight + 50
  }

</script>

<div class="pb-3 text-right">
  <button class="btn btn-light btn-sm" type="button" on:click={onChangeImages}>Shuffle images</button>
  <button class="btn btn-light btn-sm" type="button" on:click={onChangeRowHeight}>Increase row height</button>
</div>
<div bind:this={element}>
  <ImageMasonry images={images} targetRowHeight={targetRowHeight} on:image-click={onClick} let:image={image}>
    <div class="image-overlay">
      <div class="image-text">{image.title}</div>
    </div>
  </ImageMasonry>
</div>

<style lang="less">
  @import 'docs/src/style/image-overlay.less';
  .image-overlay {
    @image-overlay();
  }

  .image-text {
    @image-text();
  }
</style>
