<template>
  <div data-masonry-image class="lazy-image-container" :class="{'is-loaded': isLoaded}">
    <img
      v-if="isVisible"
      class="lazy-image"
      :class="{'is-loaded': isLoaded}"
      @load="onLoad()"
      :src="src"
      :alt="alt"
      :srcset="srcset"
    />
  </div>
</template>

<script>
import { isInViewport } from '../common/utils';

const cache = {};

export default {
  props: {
    src: String,
    alt: String,
    srcset: String,
    emitter: null
  },
  data: () => ({
    isLoaded: false,
    isVisible: false
  }),
  created() {
    if(cache[this.src]) {
      this.isLoaded = true;
      this.isVisible = true;
    }
  },
  mounted() {
    if (this.isLoaded) {
      return;
    }

    const checkIsVisible = () => {
      if (isInViewport(this.$el)) {
        this.emitter.off('viewportChange', checkIsVisible);
        this.isVisible = true;
      }
    }
    this.emitter.on('viewportChange', checkIsVisible);
    this._lazy_image_check = checkIsVisible;
    checkIsVisible();
  },
  destroyed() {
    this.emitter.off('viewportChange', this._lazy_image_check);
  },
  methods: {
    onLoad() {
      cache[this.src] = true;
      this.isLoaded = true;
    }
  }
};
</script>

<style scoped src="../common/lazy-image.css"></style>
