<script>
  import { inview } from 'svelte-inview/dist/index';
  import { cache } from '../lib/cache';

  function onLoad() {
    cache[src] = true;
  }

  export let src = '';
  export let srcset = '';
  export let alt = '';

  let isVisible = false;

  if (cache[src]) {
    isVisible = true;
  }

</script>

<style>
  .container {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    transition: opacity 300ms ease-in-out;
    opacity: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

</style>

<div
  data-masonry-image
  class="container"
  use:inview
  on:change={({ detail }) => (isVisible = detail.inView)}
>
  {#if isVisible}
    <img on:load={onLoad} {src} {srcset} {alt} />
  {/if}
</div>
