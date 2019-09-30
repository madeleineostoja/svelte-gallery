<template>
  <div data-masonry-image class="lazy-image-container" :class="{'is-loaded': isLoaded}">
    <img
      v-if="isVisible"
      class="lazy-image"
      :class="{'is-loaded': isLoaded, 'is-instant': isInstant}"
      @load="onLoad()"
      :src="src"
      :alt="alt"
      :srcset="srcset"
    />
  </div>
</template>

<script>
import whenElementVisible from '../common/when-element-visible';
const cache = {};

export default {
  props: {
    src: String,
    alt: String,
    srcset: String
  },
  data: () => ({
    isLoaded: false,
    isVisible: false,
    isInstant: false
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
    this._observer_disconnect = whenElementVisible(this.$el, ({ isVisibleOnInit }) => {
      //this.isInstant = isVisibleOnInit; // disable animation on initially visible elements
      this.isVisible = true;
    });
  },
  destroyed() {
    this._observer_disconnect && this._observer_disconnect();

  },
  methods: {
    onLoad() {
      cache[this.src] = true;
      this.isLoaded = true;
    }
  }
};
</script>

<style scoped lang="less">
  @import '../style/lazy-image.mixin.less';

  .lazy-image-container {
    .lazy-image-container
  }

  .lazy-image {
    .lazy-image
  }
</style>
