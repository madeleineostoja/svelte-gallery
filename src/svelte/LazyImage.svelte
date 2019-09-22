<script>
  import { onMount } from 'svelte';
  import { cache } from './cache';
  import { isInViewport } from '../common/utils';

  function onLoad() {
    cache[src] = true;
    isLoaded = true;
  }

  // props
  export let src = '';
  export let srcset = '';
  export let alt = '';
  export let emitter = null;

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

    const checkIsVisible = () => {
      if (isInViewport(element)) {
        emitter.off('viewportChange', checkIsVisible);
        isVisible = true;
      }
    }
    emitter.on('viewportChange', checkIsVisible);
    checkIsVisible();

    return () => {
      emitter.off('viewportChange', checkIsVisible);
    };
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

<style src="../common/lazy-image.css"></style>
