<script>
  import Img from './lib/Img.svelte';
  import layout from './lib/layout';

  export let images = [];
  export let rowHeight = 220;
  export let gutter = 4;
  export let imageComponent = Img;

  let scaledImages = [];
  let width;

  function imgStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
    let marginRight = gutter + 'px',
      flex = `0 0 ${scaledWidth}px`,
      marginBottom = isLastRow ? '0' : marginRight;

    if (isLastInRow) {
      marginRight = '0';
      flex = `1 1 ${scaledWidth - 4}px`;
    }

    return `
      height: ${scaledHeight}px;
      flex: ${flex};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
    `;
  }

  $: if (width) {
    scaledImages = layout({
      images,
      containerWidth: width,
      targetHeight: rowHeight,
      gutter
    });
  }

</script>

<style>
  .masonry {
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .image {
    position: relative;
    height: 100%;
  }

  .image :global(img) {
    display: block;
    width: 100%;
    height: 100%;
  }

</style>

<div class="masonry" bind:clientWidth={width}>
  <div class="container" style="width: {width}px">
    {#each scaledImages as image}
      <div class="image" style={imgStyle(image)}>
        <svelte:component this={imageComponent} {...image} />
      </div>
    {/each}
  </div>
</div>
