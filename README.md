# Svelte Gallery

[![NPM](https://img.shields.io/npm/v/svelte-gallery)](https://www.npmjs.com/package/svelte-gallery) [![License](https://img.shields.io/npm/l/svelte-gallery)](https://github.com/peppercornstudio/svelte-gallery/blob/master/LICENSE.md)

Intelligent masonry style photo gallery that maintains image aspect ratios in perfect rows.

The best possible layout is found by creating a graph of all possible row combinations and finding the shortest path through the graph using a target ideal row height.

Originally forked from [fergaldoyle/image-masonry](https://github.com/fergaldoyle/image-masonry), `svelte-gallery` is a heavily refactored, updated, and maintained version of the core layout logic focussed on the Svelte implementation.

### Usage

```sh
npm i svelte-gallery
```

```svelte
<script>
  import Gallery from 'svelte-gallery';

  const images = [
    { src: 'https://source.unsplash.com/random' },
    { src: 'https://source.unsplash.com/random' }
    { src: 'https://source.unsplash.com/random' }
    { src: 'https://source.unsplash.com/random' }
    { src: 'https://source.unsplash.com/random' }
  ];
</script>

<Gallery {images} />
```

### Properties

| Property    | Description                                                                             | Type               | Default |
| ----------- | --------------------------------------------------------------------------------------- | ------------------ | ------- |
| `images`    | Collection of images for the gallery. Must have `src`, `width`, and `height` properties | `HTMLImageElement` | `[]`    |
| `rowHeight` | Ideal row height to aim for in px                                                       | `number`           | `220`   |
| `gutter`    | Gap between images in the gallery in px                                                 | `number`           | `4`     |
