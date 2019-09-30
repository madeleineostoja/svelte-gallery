<script>
  import { onMount } from 'svelte';
  import { cache } from './cache';
  import whenElementVisible from '../common/when-element-visible';

  function onLoad() {
    cache[src] = true;
    isLoaded = true;
  }

  // props
  export let src = '';
  export let srcset = '';
  export let alt = '';

  // state
  let element;
  let isLoaded = false;
  let isVisible = false;

  if(cache[src]) {
    isLoaded = true;
    isVisible = true;
  }

  onMount(() => {
    if (isLoaded) {
      return;
    }

    const disconnect = whenElementVisible(element, () => {
      isVisible = true;
    });

    return () => {
      disconnect();
    }
  });
</script>

<div data-masonry-image class="lazy-image-container {isLoaded ? 'is-loaded' : ''}" bind:this={element}>
  {#if isVisible}
    <img
      class="lazy-image {isLoaded ? 'is-loaded' : ''}"
      on:load={onLoad}
      {src}
      {srcset}
      {alt}
    />
  {/if}
</div>

<style lang="less">
  @import 'src/style/lazy-image.mixin.less';

  .lazy-image-container {
    .lazy-image-container
  }

  .lazy-image {
    .lazy-image
  }
</style>
