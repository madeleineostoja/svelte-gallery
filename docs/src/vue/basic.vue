<script>
import sampleImages from '../images';
import imageMasonry from '../../../src/vue/image-masonry.vue';

export default {
  data: () => ({
    images: sampleImages
  }),
  components: {
    imageMasonry
  }
}
</script>

<template>
  <div>
    <image-masonry :images="images"></image-masonry>
  </div>
</template>
