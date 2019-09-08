<template>
  <div>
    <button type="button" @click="onChangeImages">Change images</button>   <button type="button" @click="onChangeRowHeight">Change row height</button>
    <image-masonry :images="images" :targetRowHeight="targetRowHeight" @image-click="onClick"></image-masonry>
  </div>
</template>

<script>
import sampleImages from '../images';
import imageMasonry from '../../../src/vue/image-masonry.vue';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default {
  data: () => ({
    images: sampleImages
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
      this.targetRowHeight = this.targetRowHeight + 20
    },
    onClick(...args) {
      console.log(...args);
    }
  }
}
</script>
