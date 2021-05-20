# Svelte Gallery

[![NPM](https://img.shields.io/npm/v/svelte-gallery)](https://www.npmjs.com/package/svelte-gallery) [![License](https://img.shields.io/npm/l/svelte-gallery)](https://github.com/peppercornstudio/svelte-gallery/blob/master/LICENSE.md)

Svelte Gallery is an intelligent masonry style photo gallery that maintains image aspect ratios in perfect rows.

The best possible layout is found by creating a graph of all possible row combinations and finding the shortest path through the graph using a target row height as the basis for weight/cost of each graph node.

Originally forked from [fergaldoyle/image-masonry](https://github.com/fergaldoyle/image-masonry), `svelte-gallery` is a refactored, updated, and maintained version of the core layout logic focussed on the Svelte implementation.
