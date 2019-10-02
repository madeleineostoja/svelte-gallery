<template>
  <div
    class="image-overlay"
    :class="{'is-selected': isSelected, 'select-mode': selectMode}"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <checkbox
      v-model="isSelected"
      class="image-checkbox"
      :highlight="selectMode"
      :hover="isHovering"
      :label="image.title"
    />
    <!-- <div class="image-text">{{image.title}}</div> -->
    <button type="button" @click.stop="onMagnifyClick" class="image-magnify" v-html="svg"></button>
  </div>
</template>

<script>
import checkbox from './checkbox.vue';
import svg from '../../svg/magnify.svg';

export default {
  props: {
    image: Object,
    selectMode: Boolean
  },
  data: () => ({
    isSelected: false,
    isHovering: false,
    svg
  }),
  components: {
    checkbox
  },
  mounted() {
    this.$watch('isSelected', v => {
      this.$emit('select-change', v, this.image.index);
    });
  },
  methods: {
    onClick() {
      if(this.selectMode) {
        this.isSelected = !this.isSelected;
      } else {
        this.$emit('view', this.image);
      }
    },
    onMagnifyClick(){
      this.$emit('view', this.image);
    },
    onMouseEnter() {
      this.isHovering = true;
    },
    onMouseLeave() {
      this.isHovering = false;
    }
  }
}
</script>

<style lang="less">
  @import '../../style/image-overlay.less';

  .image-overlay {
    @image-overlay();
  }

  .image-text {
    @image-text();
  }

  .image-checkbox {
    @image-checkbox();
  }

  .image-magnify {
    @image-magnify();
  }

  .select-mode {
    @select-mode();
  }
</style>
