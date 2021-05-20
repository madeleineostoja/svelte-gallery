<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import createLayout from '.../lib/layout';
  import elementResizeEvent, { unbind } from 'element-resize-event';
  import GalleryImg from './GalleryImg.svelte';
  import debounce from 'debounce';

  function makeStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
    let mr = padding + 'px';
    const mb = isLastRow ? '0' : mr;
    let flex = `0 0 ${scaledWidth}px`;
    if (isLastInRow) {
      mr = '0';
      flex = `1 1 ${scaledWidth - 4}px`;
    }
    return `height: ${scaledHeight}px; flex: ${flex}; margin-right:${mr}; margin-bottom: ${mb};`;
  }

  function onClick(index) {
    dispatch('image-click', {
      image: images[index],
      index
    });
  }

  const dispatch = createEventDispatcher();

  export let images = [];
  export let targetRowHeight = 220;
  export let padding = 4;

  let element;
  let scaledImages = [];
  let width;
  let resizing = false;

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

    const resizedFinished = debounce(() => {
      resizing = false;
    }, 100);

    elementResizeEvent(element, () => {
      if (
        Math.round(width) !== Math.round(element.getBoundingClientRect().width)
      ) {
        resizing = true;
        width = element.getBoundingClientRect().width;
        resizedFinished();
      }
    });

    return () => unbind(element);
  });

</script>

<style>
  .masonry {
    max-width: 100%;
  }

  .resizing {
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
  }

</style>

<div class="masonry" class:resizing>
  <div data-resizer bind:this={element} />
  <div class="container" style="width: {width}px">
    {#each scaledImages as image (image.src)}
      <div
        class="item"
        style={makeStyle(image)}
        on:click={() => onClick(image.index)}
      >
        <GalleryImg {...image} />
        <slot {image} />
      </div>
    {/each}
  </div>
</div>
