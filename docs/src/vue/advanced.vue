<template>
  <div>
    <div class="pb-3 text-right">
      <button class="btn btn-light btn-sm" type="button" @click="onChangeImages">Shuffle images</button>
      <button class="btn btn-light btn-sm" type="button" @click="onChangeRowHeight">Increase row height</button>
    </div>

    <!-- <p v-if="selectedImages.length">
      Selected {{selectedImages.length}} of {{images.length}}
    </p> -->

    <image-masonry :images="images" :targetRowHeight="targetRowHeight">
      <template v-slot="{image}">
        <image-overlay
          :image="image"
          :select-mode="isSelecting"
          @select-change="onSelect"
          @view="onOpen"
        />
      </template>
    </image-masonry>
  </div>
</template>

<script>
import sampleImages from '../images-advanced';
import imageMasonry from '../../../src/vue/image-masonry.vue';
import imageOverlay from './components/image-overlay.vue';
import openPhotoSwipe from '../photoswipe';
import { shuffleArray } from '../utils';

export default {
  data: () => ({
    images: sampleImages,
    targetRowHeight: 220,
    isSelecting: false,
    selectedImages: []
  }),
  components: {
    imageMasonry,
    imageOverlay
  },
  methods: {
    onChangeImages() {
      this.images = shuffleArray(this.images);
    },
    onChangeRowHeight() {
      this.targetRowHeight = this.targetRowHeight + 50;
    },
    onSelect(value, index) {
      if (value) {
        this.selectedImages.push(this.images[index]);
      } else {
        const removeIndex = this.selectedImages.indexOf(this.images[index]);
        this.selectedImages.splice(removeIndex, 1);
      }

      this.isSelecting = !!this.selectedImages.length;
    },
    onOpen(image) {
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
      openPhotoSwipe(images, image.index, (index) => {
        return this.$el.querySelectorAll('[data-masonry-image]')[index].querySelector('img');
      });
    }
  }
}
</script>
