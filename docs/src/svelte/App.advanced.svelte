<script>
  import ImageMasonry from '../../../src/svelte/ImageMasonry.svelte';
  import sampleImages from '../images';
  import openPhotoSwipe from '../photoswipe';

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function onClick(event) {
    openPhotoSwipe(images, event.detail.index, {
      container: document.body,
      selector: '.image-masonry-item'
    });
  }

  let images = sampleImages;
  let targetRowHeight = 200;

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
<ImageMasonry images={images} targetRowHeight={targetRowHeight} on:image-click={onClick} let:image={image}>
  <div class="image-masonry-overlay">
    <div class="image-masonry-text">{image.title}</div>
  </div>
</ImageMasonry>

<style>
.image-masonry-overlay {
  cursor: pointer;
  display: flex;
  display: -ms-flexbox;
  align-items: flex-end;
  position: absolute;
  top: 0;
  bottom: 1px;
  left: 1px;
  right: 1px;
  opacity: 0;
  transition: opacity 250ms linear;
  background-image: linear-gradient(rgba(0,0,0,0) 75%,rgba(0,0,0,0.4));
}

.image-masonry-overlay:hover {
  opacity: 1;
}

.image-masonry-text {
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 2px #000;
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
