import { LitElement, html } from 'lit-element';
import { ImageMasonry } from '../../../src/litelement/image-masonry';
import sampleImages from '../images';

class ImageMasonryExample extends LitElement {
  render() {
    return html `
      <image-masonry .images=${sampleImages}></image-masonry>
    `;
  }
}

customElements.define('image-masonry-example', ImageMasonryExample);
