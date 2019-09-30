<template>
  <span
    class="checkbox"
    :class="{'is-checked': isChecked, 'is-highlighted': highlight, 'is-hovering': hover}"
    role="checkbox"
    :aria-checked="isChecked + ''"
    :aria-label="label"
    tabindex="0"
    v-html="svg"
    @click.stop="onClick"
  >
  </span>
</template>

<script>
import svg from "../../check.svg";

export default {
  props: {
    label: String,
    value: Boolean,
    highlight: Boolean,
    hover: Boolean
  },
  data: ()=>({
    svg,
    isChecked: false
  }),
  watch: {
    value: {
      handler(v) {
        this.isChecked = v;
      },
      immediate: true
    }
  },
  methods: {
    onClick(e) {
      this.isChecked = !this.isChecked;
      this.$emit('change', this.isChecked);
      this.$emit('input', this.isChecked);
    }
  }
};
</script>

<style lang="less" src="../../style/checkbox.less"></style>
