<script>
  import ImageMasonry from "../../../src/svelte/ImageMasonry.svelte";
  import sampleImages from "../images";

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let images = sampleImages;
  let targetRowHeight = 200;

  function onChangeImages() {
    const newArray = [...sampleImages];
    shuffleArray(newArray);
    images = newArray;
  }

  function onChangeRowHeight() {
    targetRowHeight = targetRowHeight + 20
  }

</script>

<button type="button" on:click={onChangeImages}>Change images</button> <button type="button" on:click={onChangeRowHeight}>Change row height</button>
<ImageMasonry images={images} targetRowHeight={targetRowHeight}/>
