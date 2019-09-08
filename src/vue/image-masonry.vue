<template>
  <div class="image-masonry">
    <div v-for="(image, index) in scaledImages"
          :key="image.src" class="image-masonry-item"
          :style="makeStyle(image)"
          @click="onClick(index, $event)">
      <img :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script>
import createLayout from '../common/justified-layout';
import elementResizeEvent, { unbind } from 'element-resize-event';

export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: []
    },
    targetRowHeight: {
      type: Number,
      default: 220
    }
  },
  data: () => ({
    scaledImages: [],
    width: 0
  }),
  methods: {
    makeStyle({ scaledWidthPc, scaledHeight }) {
      return {
        width: scaledWidthPc + '%',
        height: scaledHeight + 'px'
      }
    },
    onClick(index, event) {
      this.$emit('image-click', this.images[index], index, event);
    }
  },
  mounted() {
    const process = () => {
      this.width = this.$el.getBoundingClientRect().width;
      this.scaledImages = createLayout(this.images, this.width, this.targetRowHeight);
    }

    elementResizeEvent(this.$el, () => {
      if (Math.round(this.width) !== Math.round(this.$el.getBoundingClientRect().width)) {
        process();
      }
    });

    this.$watch('images', () => {
      process();
    }, {
      immediate: true,
      deep: true
    });

    this.$watch('targetRowHeight', process);

  },
  beforeDestroy() {
    unbind(this.$el);
  }
};
</script>
