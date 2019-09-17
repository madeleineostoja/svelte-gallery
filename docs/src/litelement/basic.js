import { LitElement, html } from 'lit-element';
import '../../../src/litelement/image-masonry';
import sampleImages from '../images';

class ImageMasonryExample extends LitElement {
  static get properties() {
    return {
      images: { type: Array }
    };
  }

  constructor() {
    super();
    this.images = sampleImages;
  }

  render() {
    return html `
      <image-masonry .images=${this.images}></image-masonry>
    `;
  }
}

customElements.define('image-masonry-example', ImageMasonryExample);
