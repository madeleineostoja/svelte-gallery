<template>
  <div class="image-masonry">

    <div class="masonry-row" v-for="(row, index) in scaledImages" :key="index" :style="{'margin-bottom' : padding + 'px'}" >
      <div
        v-for="image in row"
        :key="image.src"
        class="masonry-item"
        :style="makeStyle(image)"
        @click="onClick(image.index, $event)"
      >
        <lazy-image
          class="masonry-image"
          :src="image.src"
          :alt="image.alt"
          :srcset="image.srcset"
          v-if="true"
        />
        <img :key="image.src" v-else class="image" data-masonry-image :src="image.src" :alt="image.alt" :srcset="image.srcset" >
        <slot :image="image" :index="index"></slot>
      </div>
    </div>

  </div>
</template>

<script>
  import createLayout from '../common/justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import lazyImage from './lazy-image.vue';

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
      width: 0
    }),
    components: {
      lazyImage
    },
    methods: {
      makeStyle({ scaledHeight, scaledWidth }) {
        return {
          width: scaledWidth + 'px',
          height: scaledHeight + 'px',
          'margin-right': this.padding + 'px'
        };
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

<style scoped src="../common/style.css"></style>
