<template>
  <div class="image-masonry" :class="{'is-resizing': isResizing}">
    <div data-resizer></div>
    <div class="image-masonry-container" :style="{'width': width + 'px'}">
      <div
        v-for="image in scaledImages"
        :key="image.src"
        class="masonry-item"
        :style="makeStyle(image)"
        @click="onClick(image.index, $event)"
      >
        <slot :image="image" :index="index"></slot>
        <lazy-image
          :src="image.src"
          :alt="image.alt"
          :srcset="image.srcset"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import createLayout from '../common/justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import lazyImage from './lazy-image.vue';
  import { debounce } from '../common/utils';

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
      },
      padding: {
        type: Number,
        default: 4
      }
    },
    data: () => ({
      scaledImages: [],
      width: 0,
      isResizing: false
    }),
    components: {
      lazyImage
    },
    methods: {
      makeStyle({ scaledHeight, scaledWidth, isLastInRow, isLastRow }) {
        let mr = this.padding + 'px';
        const mb = isLastRow ? '0' : mr;
        let flex = `0 0 ${scaledWidth}px`;
        if (isLastInRow) {
          mr = '0';
          flex = `1 1 ${scaledWidth-4}px`;
        }
        return {
          height: scaledHeight + 'px',
          flex: flex,
          'margin-right': mr,
          'margin-bottom': mb
        }
      },
      onClick(index, event) {
        this.$emit('image-click', this.images[index], index, event);
      }
    },
    mounted() {
      const process = () => {
        this.width = this.$el.getBoundingClientRect().width;
        this.scaledImages = createLayout({
          images: this.images,
          containerWidth: this.width,
          targetHeight: this.targetRowHeight,
          padding: this.padding
        });
      };

      const el = this.$el.querySelector('[data-resizer]');
      const resizedFinished = debounce(() => {
        this.isResizing = false;
      }, 100);

      elementResizeEvent(el, () => {
        if (Math.round(this.width) !== Math.round(el.getBoundingClientRect().width)) {
          this.isResizing = true;
          process();
          resizedFinished();
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

<style scoped lang="less">
  @import '../style/image-masonry.mixin.less';

  .image-masonry {
    @image-masonry();
  }

  .image-masonry-container {
    @image-masonry-container();
  }

  .masonry-item {
    @masonry-item();
  }
</style>
