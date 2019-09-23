<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import createLayout from '../common/justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import LazyImage from './LazyImage.svelte';

  function makeStyle({ scaledWidth, scaledHeight }) {
    return `width:${scaledWidth}px; height:${scaledHeight}px; margin-right:${padding}px`;
  }

  function onClick(index) {
    dispatch('image-click', {
      image: images[index],
      index
    });
  }

  const dispatch = createEventDispatcher();

  // props
  export let images = [];
  export let targetRowHeight = 220;
  export let padding = 4;

  // state
  let element;
  let scaledImages = [];
  let width;

  // reactive statement
  $: if (width) {
    scaledImages = createLayout({
      images,
      containerWidth: width,
      targetHeight: targetRowHeight,
      padding
    });
  }

  onMount(() => {
    width = element.getBoundingClientRect().width;

    elementResizeEvent(element, () => {
      if (Math.round(width) !== Math.round(element.getBoundingClientRect().width)) {
        width = element.getBoundingClientRect().width;
      }
    });

    return () => unbind(element);
  });
</script>

<div class="image-masonry" bind:this={element}>
  {#each scaledImages as row}
    <div class="masonry-row" style="margin-bottom: {padding}px">
      {#each row as image (image.src)}
        <div class="masonry-item" style={makeStyle(image)} on:click={()=>onClick(image.index)}>
          <LazyImage {...image} />
          <slot image={image}></slot>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style src="../common/style.css"></style>
