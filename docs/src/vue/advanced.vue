<template>
  <div>
    <div class="pb-3 text-right">
      <button class="btn btn-light btn-sm" type="button" @click="onChangeImages">Shuffle images</button>
      <button class="btn btn-light btn-sm" type="button" @click="onChangeRowHeight">Increase row height</button>
    </div>

    <image-masonry :images="images" :targetRowHeight="targetRowHeight" @image-click="onClick" ref="imageMasonry">
      <template v-slot="{image}">
        <div class="image-masonry-overlay">
          <div class="image-masonry-text">{{image.title}}</div>
        </div>
      </template>
    </image-masonry>
  </div>
</template>

<script>
import sampleImages from '../images-advanced';
import imageMasonry from '../../../src/vue/image-masonry.vue';
import openPhotoSwipe from '../photoswipe';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default {
  data: () => ({
    images: sampleImages,
    targetRowHeight: 220
  }),
  components: {
    imageMasonry
  },
  methods: {
    onChangeImages() {
      const newArray = [...sampleImages];
      shuffleArray(newArray);
      this.images = newArray;
    },
    onChangeRowHeight() {
      this.targetRowHeight = this.targetRowHeight + 50
    },
    onClick(image, index) {
      // create array compatible with PhotoSwipe
      const images = this.images.map(({ src, width, height, original, title }) => {
        return {
          src: original,
          msrc: src,
          w: width,
          h: height,
          title
        }
      });
      openPhotoSwipe(images, index, {
        container: this.$refs.imageMasonry.$el,
        selector: '.image-masonry-item'
      });
    }
  }
}
</script>

<style src="../image-details.css"></style>
