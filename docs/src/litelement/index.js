import { LitElement, html } from 'lit-element';
import { ImageMasonry } from '../../../src/litelement/image-masonry';
import sampleImages from '../images';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


class ImageMasonryExample extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      targetRowHeight: { type: Number }
    };
  }

  constructor() {
    super();
    this.images = sampleImages;
    this.targetRowHeight = 220;
  }

  onChangeImagesClick() {
    const newArray = [...sampleImages];
    shuffleArray(newArray);
    this.images = newArray;
  }

  onChangeRowHeightClick() {
    this.targetRowHeight = this.targetRowHeight + 20;
  }

  render() {
    return html `
      <button type="button" @click="${this.onChangeImagesClick}">Change images</button>   <button type="button" @click="${this.onChangeRowHeightClick}">Change row height</button>
      <image-masonry .images=${this.images} .targetRowHeight=${this.targetRowHeight}></image-masonry>
    `;
  }
}

customElements.define('image-masonry-example', ImageMasonryExample);
