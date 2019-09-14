<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import createLayout from '../common/justified-layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';

  function makeStyle({ scaledWidthPc, scaledHeight }) {
    return `width:${scaledWidthPc}%; height:${scaledHeight}px`;
  }

  function onClick(index) {
    dispatch('image-click', images[index]);
  }

  const dispatch = createEventDispatcher();

  // props
  export let images = [];
  export let targetRowHeight = 200;

  // state
  let element;
  let scaledImages = [];
  let width;

  // reactive statement
  $: if (width) {
    scaledImages = createLayout(images, width, targetRowHeight);
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
  {#each scaledImages as image, index}
    <div class="image-masonry-item" style={makeStyle(image)} on:click={()=>onClick(index)}>
      <img src={image.src} alt={image.alt} />
    </div>
  {/each}
</div>
