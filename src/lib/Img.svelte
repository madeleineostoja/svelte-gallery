<script>
  import { onMount } from 'svelte';

  export let placeholder = '';
  export let src;
  export let srcset;

  let img;
  let intersected = false;

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      intersected = true;
      observer.unobserve(img);
    }
  });

  onMount(() => {
    observer.observe(img);
    return () => observer.unobserve(img);
  });

</script>

<img
  bind:this={img}
  src={intersected ? src : placeholder}
  srcset={intersected ? srcset : undefined}
  {...$$restProps}
/>
